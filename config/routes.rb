Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'todo/index'
      post 'todo/create'
      get '/show/:id', to: 'todo#show'
     

      # get 'todo/destroy'
    end
  end
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
