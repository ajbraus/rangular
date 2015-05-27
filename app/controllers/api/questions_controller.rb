class Api::QuestionsController < ApplicationController

  def index 
    respond_with Question.all
  end

  def create
    @question = Question.new(question_params)
    
    if @question.save
      respond_with @question 
    else
      respond_with @question.errors
    end
  end

  private

  def question_params
    params.require(:question).permit(:content)
  end
end