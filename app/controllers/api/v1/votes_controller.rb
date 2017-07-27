class Api::V1::VotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    vote = Vote.find_by(review_id: params[:review_id], user_id: params[:user_id])
    if vote
      render json: { voting: vote.vote }
    else
      render json: { voting: nil }
    end
  end

  def create
    # Creates or updates a Vote db entry
    # to match the post body 
    data = JSON.parse(request.body.read)
    data_vote = data["vote"]
    vote = Vote.find_by(
      review_id: data_vote["review_id"],
      user_id: data_vote["user_id"]
    )
    review = Review.find(data_vote["review_id"])

    newVote = data_vote["vote"]
    if vote
      # Vote exists, just change its vote key
      oldVote = vote.vote
      if oldVote == nil && newVote == true
        review.num_upvotes += 1
      elsif oldVote == nil && newVote == false
        review.num_downvotes += 1
      elsif oldVote == true && newVote == nil
        review.num_upvotes -= 1
      elsif oldVote == false && newVote == nil
        review.num_downvotes -= 1
      elsif oldVote == true && newVote == false
        review.num_upvotes -= 1
        review.num_downvotes += 1
      elsif oldVote == false && newVote == true 
        review.num_upvotes += 1
        review.num_downvotes -= 1
      end
      review.save

      vote.vote = data_vote["vote"]
      vote.save
      render json: { voting: data_vote["vote"]}
    else
      # Vote does not exist, create it
      Vote.create(data_vote)
      if newVote == true
        review.num_upvotes += 1
      elsif newVote == false
        review.num_downvotes += 1
      end
      review.save
      render json: { voting: data_vote["vote"]}
    end
  end
end
