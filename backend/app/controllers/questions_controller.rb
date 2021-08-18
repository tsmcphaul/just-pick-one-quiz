class QuestionsController < ApplicationController

    def index
        questions = Question.all
        render json: QuestionSerializer.new(questions)
    end

    def create
        question = Question.new(question_params)
        if question.save
            render json: QuestionSerializer.new(question)
        end
    end

    private
    def question_params
        params.require(:question).permit(:content)
    end
end
