class UsersController < ApplicationController
  before_action :authorize_user, only: [:index, :destroy]

  def index
    @users = User.all
    @reviews = Review.all
    @parks = Park.all
  end

  def show
    @parks = current_user.parks
    @reviews = current_user.reviews
    binding.pry
  end

  def edit
  end

  def create
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, notice: 'User was successfully destroyed.'
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
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
