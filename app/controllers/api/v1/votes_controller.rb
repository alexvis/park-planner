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

    if vote
      # Vote exists, just change its vote key
      vote.vote = data_vote["vote"]
      vote.save
      render json: { voting: data_vote["vote"]}
    else
      # Vote does not exist, create it
      Vote.create(data_vote)
      render json: { voting: data_vote["vote"]}
    end
  end
end
