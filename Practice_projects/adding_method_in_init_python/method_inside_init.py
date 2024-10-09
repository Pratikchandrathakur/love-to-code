# Write code below 💖
class Student: 
  def __init__(self, name, year, enrolled, gpa):
    self.name = name
    self.year = year
    self.enrolled = enrolled
    self.gpa = gpa
  
  def display_info(self):
    print('The student ' + self.name + '\'s GPA is ' + str(self.gpa) + '!')

  def graduation(self):
    if self.enrolled and self.gpa > 2.5 and self.year == 12:
      print(self.name + ' will be able to graduate this year!')


mitsuha = Student('宮水三葉', 11, False, 4.0)
taki = Student('立花瀧', 12, True, 3.8)

mitsuha.display_info() #Output:The student 宮水三葉's GPA is 4.0!
mitsuha.graduation() #output: Nothing.
taki.display_info() #Output:The student 立花瀧's GPA is 3.8!
taki.graduation() #Output: 立花瀧 will be able to graduate this year!

