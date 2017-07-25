Rails.application.routes.draw do
  root "users#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :parks, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:show] do
        resources :reviews, only: [:index]
	resources :users, only: [:show] do
	  resources :follows, only: [:index]
	end
      end
      resources :follows, only: [:create]
    end
  end
end
