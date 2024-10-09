# Write code below 💖

# Using __init__() in our class definition lets us construct objects
#  with unique attributes. When we create a new Student() object,
#   we can pass in values for each attribute to initialize the new object,
#    all in a single line!
class Student: 
  def __init__(self, name, year, gpa, enrolled):
    self.name = name
    self.year = year
    self.gpa = gpa
    self.enrolled = enrolled

daniel = Student('Daniel Li', 10, 4.0, True)
  
oliver=Student('Biscuit Oliver',20,3.7,True)
print(vars(oliver))
print(vars(daniel))

