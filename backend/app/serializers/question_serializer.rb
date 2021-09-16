class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :answers
  has_many :answers
end
