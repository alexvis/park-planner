class ParksController < ApplicationController
  before_action :authorize_user, only: [:destroy]

  def show
    @id = params[:id]
  end

  def destroy
    @park = Park.find(params[:id])
    @park.destroy
    redirect_to users_path, notice: 'Park was successfully destroyed.'
  end

  private
  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
