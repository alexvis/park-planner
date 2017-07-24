Rails.application.routes.draw do
  root "users#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users

  # namespace :users do
  #   root 'users#show'
  # end
  namespace :api do
    namespace :v1 do
      resources :reviews, only: [:index, :create]
    end
  end
end
