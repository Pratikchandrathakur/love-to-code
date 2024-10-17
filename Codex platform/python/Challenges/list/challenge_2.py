# 🎟️ Lottery-->Medium
# Are you feeling lucky? Let's replicate a small lottery that decides a winner based on random numbers. This challenge will use the random module.

# Create two empty lists called my_numbers and winning_numbers.

# Loop over a range of 5 steps (i.e., range(0,5)) and populate both lists with a random number between 1 and 69.

# Outside the loop, add one more number to each list that is between 1 and 26.

# Lastly, print the my_numbers and winning_numbers lists to the terminal. The output could look like this:

# My Numbers: [59, 66, 28, 52, 10, 12]
# Winning Numbers: [26, 27, 37, 35, 47, 8]


# Write code below 💖
import random

my_numbers=[]
winning_numbers=[]

for num in range(0,5):
  my_numbers.append(random.randint(1,69))
for num in range(0,5):
  winning_numbers.append(random.randint(1,69))

my_numbers.append(random.randint(1,26))
winning_numbers.append(random.randint(1,26))

print(f"My Numbers: {my_numbers}")
print(f"Winning Numbers: {winning_numbers}")







