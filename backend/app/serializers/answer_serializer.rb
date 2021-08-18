class AnswerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :correct_answer, :question_id
  belongs_to :question
end
