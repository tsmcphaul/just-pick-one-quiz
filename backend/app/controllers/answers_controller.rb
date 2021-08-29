class AnswersController < ApplicationController
    def index
        answers = Answer.all
        # render json: AnswerSerializer.new(answers)
        render json: answers
    end

    def create
        answer = Answer.new(answer_params)
        if answer.save
            render json: AnswerSerializer.new(answer)
        end
    end



    private
    def answer_params
        params.require(:answer).permit(:content, :correct_answer, :question_id) 
    end
end
