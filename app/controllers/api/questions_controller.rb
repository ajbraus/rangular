class Api::QuestionsController < ApplicationController

  def index 
    respond_with Question.all.order('created_at DESC')
  end

  def create
    @question = Question.new(question_params)
    
    if @question.save
      respond_to do |format|
        format.json { render :json => @question }
      end
    else
      respond_to do |format|
        format.json { render :json => @question.errors }
      end
    end
  end

  private

  def question_params
    params.require(:question).permit(:content)
  end
end