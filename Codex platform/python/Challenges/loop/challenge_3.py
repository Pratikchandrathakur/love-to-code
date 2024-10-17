# 🎲 Dice Roll-->Medium
# Dice Roll
# Suppose we have two dice. 🎲 🎲

# Create a game where one guesses the total value after rolling a pair of dice once.

# Each die has the integer values 1 to 6. Since there's two dice, the range of possible values is between 2 and 12 (inclusive).

# Use the random module to “roll” the dice and store the random values of each die variable in a new total variable.

# Until the correct value is guessed, use a while loop to keep prompting the user for a number.

# Use while loops along with methods from the random module to solve this challenge.

# What is the total (2-12)? 10
# What is the total (2-12)? 7
# You got it!

# Write code below 💖
import random
dice1=random.randint(1,6)
dice2=random.randint(1,6)
total=dice1+dice2
user_guess=int(input("What is the total please have a guess "))
while user_guess!=total:
  user_guess=int(input("What is the total please have a guess "))
print('You got it')


