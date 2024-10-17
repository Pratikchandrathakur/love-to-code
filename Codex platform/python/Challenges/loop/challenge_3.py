# Write code below 💖
import random
dice1=random.randint(1,6)
dice2=random.randint(1,6)
total=dice1+dice2
user_guess=int(input("What is the total please have a guess "))
while user_guess!=total:
  user_guess=int(input("What is the total please have a guess "))
print('You got it')


