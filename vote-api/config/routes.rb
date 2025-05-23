Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :polls, only: [:index, :show, :update]
      resources :votes, only: [:create]
    end
  end
  get "up" => "rails/health#show", as: :rails_health_check

  mount ActionCable.server => '/cable'
end
