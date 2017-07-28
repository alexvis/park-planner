class ReviewsController < ApplicationController
  before_action :authorize_user, only: [:destroy]

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    if current_user.admin?
      redirect_to users_path, notice: 'Review was successfully destroyed.'
    else
      redirect_to user_path(current_user), notice: 'Review was successfully destroyed.'
    end
  end

  private
  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Not Found")
    else !current_user.admin?
      unless current_user.id == Review.find(params[:id]).user_id
        raise ActionController::RoutingError.new("Not Found")
      end
    end
  end
end
