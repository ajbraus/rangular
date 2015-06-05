class Api::QuestionsController < ApplicationController
  respond_to :json

  def index
    @questions = Question.all.order('created_at DESC')

    respond_with :api, @questions
  end

  def show
    @question = Question.find(params[:id])

    respond_with :api, @question
  end

  def create
    @question = Question.create(question_params)

    respond_with :api, @question
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    respond_with status: :success
  end

  private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def question_params
      params.require(:question).permit(:title, :body)
    end
end