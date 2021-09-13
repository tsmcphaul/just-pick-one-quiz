class GradesController < ApplicationController
    def index
        grades = Grade.all
        render json: GradeSerializer.new(grades)
    end
    
    def create
        grade = Grade.new(grade_params)
        if grade.save
            render json: GradeSerializer.new(grade)
        end
    end

    private
    def grade_params
        params.require(:grade).permit(:score)
    end
end
