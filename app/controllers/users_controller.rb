class UsersController < ApplicationController
  before_action :authorize_user, except: [:index]

  def index

  end

  def show
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

  def authorize_user
    if (current_user.role == "admin")
      render :index
    end
  end
end
