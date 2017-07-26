Rails.application.routes.draw do
  root "welcome#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :welcome, only: [:index]
  resources :users
  resources :parks, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:show] do
        resources :users, only: [:show] do
          resources :follows, only: [:index]
        end
        resources :reviews, only: [:index]
      end
      resources :reviews, only: [:create]
      resources :follows, only: [:create]
    end
  end
end
