Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :benches, defaults: {format: :json}, only: [:create, :index]
  end
end
