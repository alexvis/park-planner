class UsersController < ApplicationController
  def index
    if user_signed_in?
      redirect_to user_path(current_user)
    end
  end
  def show
    # @user = User.find(params[:id])
  end
  def edit
  end
end
