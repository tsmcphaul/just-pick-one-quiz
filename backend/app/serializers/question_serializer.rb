class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :answers
  has_many :answers
end
