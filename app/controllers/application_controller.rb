class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,
      keys: [:first_name, :last_name, :state, :user_name, :profile_photo])
  end

  # def after_sign_in_path_for(resource)
  #   user_path(current_user)
  # end
end
