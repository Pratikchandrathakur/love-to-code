def getdrink(age,money):
  if(age>=21) and (money>=5):
    return "Your drink is comming right away!"
  elif(age>=21) and (money<5):
    return "Your have not enough money!"
  elif(age<21) and (money>=5):
    return "nice try kid!"
  else:
    return "Your are under age and poor!"
#checking through the inputs in function
print(getdrink(21,5))
print(getdrink(21,4))
print(getdrink(20,5))
print(getdrink(20,4))
