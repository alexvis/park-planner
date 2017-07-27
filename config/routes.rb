Rails.application.routes.draw do
  root "welcome#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :welcome, only: [:index]
  resources :users
  resources :parks, only: [:show, :destroy]
  resources :reviews, only: [:destroy]

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:show] do
        resources :reviews, only: [:index]
	      resources :users, only: [:show] do
	       resources :follows, only: [:index]
	      end
      end
      resources :reviews, only: [:show] do
        resources :users, only: [:show] do
          resources :votes, only: [:index]
        end
      end
      resources :votes, only: [:create]
      resources :follows, only: [:create]
    end
  end
end
