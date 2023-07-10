class Api::V1::TodoController < ApplicationController
  before_action :set_recipe, only: %i[show destroy]

  def index
    todo = Todo.all
    render json: todo
  end
  def create
    todo = Todo.create!(recipe_params)
    if todo
      render json: todo
    else
      render json: todo.errors
    end
  end

  
  def show
    render json: @todo
  end
 


  def destroy
  end

 

  private

  def recipe_params
    params.permit(:title, :discription, :completed)
  end

  def set_recipe
    @todo = Todo.find(params[:id])
  end

end
