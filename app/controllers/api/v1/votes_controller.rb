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
    # Toggles creating and deleting the voting entry
    # in order to vote and unvote
    data = JSON.parse(request.body.read)
    data_vote = data["vote"]
    vote = Vote.find_by(
      review_id: data_vote["review_id"],
      user_id: data_vote["user_id"]
    )

    if vote
      # Vote exists, destroy it
      Vote.destroy(vote.id)
      render json: { voting: false }
    else
      # Vote does not exist, create it
      Vote.create(data_vote)
      render json: { voting: true }
    end
  end
end
