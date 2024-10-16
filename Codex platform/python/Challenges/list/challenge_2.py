# Write code below 💖

import random
my_numbers=[]
winning_numbers=[]
def random_number_populator(list_name):
#  Generates a sequence of 5 random numbers between 1 to 69 
  for num in range(0,5):
    num=random.randint(1,69)
    list_name.append(num)


random_number_populator(my_numbers)
my_numbers.append(random.randint(1,26))
random_number_populator(winning_numbers)
winning_numbers.append(random.randint(1,26))

print(f"My Numbers:{my_numbers}")
print(f"Winning Numbers:{winning_numbers}")

