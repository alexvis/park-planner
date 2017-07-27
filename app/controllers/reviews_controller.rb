class ReviewsController < ApplicationController
  before_action :authorize_user, only: [:destroy]

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to users_path, notice: 'Review was successfully destroyed.'
  end

  private
  def authorize_user
    if !user_signed_in? || !current_user.admin? || !current_user.id == Review.find(params[:id]).user_id
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
