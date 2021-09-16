class Question < ApplicationRecord
    has_many :answers
    accepts_nested_attributes_for :answers
end
