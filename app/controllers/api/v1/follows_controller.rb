class Api::V1::FollowsController < ApplicationController

  def index
    if !current_user
      render json: {following: nil}
    end

    if(Follow.find_by park_id: parms[:park_id], user_id: current_user.id)
      render json: {following: true}
    else
      render json: {following: false}
    end
  end

  def create 
    @follow = Follow.new(follow_params)

    if @follow.save
      render json: {following: true}
    else
      render json: {following: false}
    end
  end

  def destroy
  end

  private

  def follow_params
    follow = params.require(:follow).permit(:park_id)
    user = {user_id: current_user.id}
    follow.merge(user)
  end
end
