class City:
  def __init__(self,name,country,popultaion,landmark,nickname,founding_year,mayor):
    self.name=name # this is property called name in city class.
    self.country=country # after = is the parameter value that is stored through arguments.
    self.population=popultaion
    self.landmark=landmark
    self.nickname=nickname
    self.founding_year=founding_year
    self.mayor=mayor


sirsiya=City('Sirsiya gaur','India',20000,'KidsCottage College','Gaurpuram','1970','Gullu lal')
print(vars(sirsiya)) #You can check all the attributes available on the sirsiya object with the built-in vars() function.
print(sirsiya) # this will through an error because sirsiya is an object, we want all proprties to be displayed.
