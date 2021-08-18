class AnswersController < ApplicationController
    def index
        answers = Answer.all
        render json: AnswerSerializer.new(answers)
    end

    def create
        answer = Answer.create(answer_params)
        if answer.save
            render json: answer
        end
    end



    private
    def answer_params
        params.require(:answer).permit(:content, :correct_answer, :question_id) 
    end
end
