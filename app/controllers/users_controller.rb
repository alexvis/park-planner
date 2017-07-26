class UsersController < ApplicationController
  def index
  end
  def show
  end
  def edit
  end

  def create
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
