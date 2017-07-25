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

  def create
    @user = current_user
  end
  def update
    @user = current_user
    if @user.update(user_params)
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :state, :user_name, :profile_photo)
  end
end
