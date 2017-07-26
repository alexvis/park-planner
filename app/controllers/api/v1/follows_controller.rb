class Api::V1::FollowsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if Follow.find_by(park_id: params[:park_id], user_id: params[:user_id])
      render json: { following: true }
    else
      render json: { following: false }
    end
  end

  def create
    # Toggles creating and deleting the following entry
    # in order to follow and unfollow
    data = JSON.parse(request.body.read)
    data_follow = data["follow"]
    follow = Follow.find_by(
      park_id: data_follow["park_id"],
      user_id: data_follow["user_id"]
    )

    if follow
      # Follow exists, destroy it
      Follow.destroy(follow.id)
      render json: { following: false }
    else
      # Follow does not exist, create it
      Follow.create(data_follow)
      render json: { following: true }
    end
  end
end
