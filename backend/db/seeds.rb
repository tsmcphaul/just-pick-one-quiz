# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

question_1 = Question.create(:content => "What year and pick was Lebron James drafted in the NBA?")
answer_1 = Answer.create([
    {:content => "2003, #2", :correct_answer => false, :question_id => question_1.id},
    {:content => "2005, #5", :correct_answer => false, :question_id => question_1.id},
    {:content => "2003, #1", :correct_answer => true, :question_id => question_1.id},
    {:content => "2004, #1", :correct_answer => false, :question_id => question_1.id}
])

question_2 = Question.create(:content => "How many times has Lebron James won the NBA MVP award?")
answer_2 = Answer.create([
    {:content => "1", :correct_answer => false, :question_id => question_2.id},
    {:content => "3", :correct_answer => false, :question_id => question_2.id},
    {:content => "2", :correct_answer => false, :question_id => question_2.id},
    {:content => "4", :correct_answer => true, :question_id => question_2.id}
])

question_3 = Question.create(:content => "What is Lebron James' Alma Mater?")
answer_3 = Answer.create([
    {:content => "St. Vincent-St. Mary", :correct_answer => true, :question_id => question_3.id},
    {:content => "Sierra Canyon School ", :correct_answer => false, :question_id => question_3.id},
    {:content => "Oak Hill Academy", :correct_answer => false, :question_id => question_3.id},
    {:content => "Minnehaha Academy", :correct_answer => false, :question_id => question_3.id}
])

question_4 = Question.create(:content => "How many championships has Lebron James won?")
answer_4 = Answer.create([
    {:content => "2", :correct_answer => false, :question_id => question_4.id},
    {:content => "4", :correct_answer => true, :question_id => question_4.id},
    {:content => "3", :correct_answer => false, :question_id => question_4.id},
    {:content => "6", :correct_answer => false, :question_id => question_4.id}
])

question_5 = Question.create(:content => "In 2021, Lebron James starred in what sequel?")
answer_5 = Answer.create([
    {:content => "Air Bud 2", :correct_answer => false, :question_id => question_5.id},
    {:content => "Like Mike 2", :correct_answer => false, :question_id => question_5.id},
    {:content => "Space Jam 2", :correct_answer => true, :question_id => question_5.id},
    {:content => "Semi-Pro", :correct_answer => false, :question_id => question_5.id}
])