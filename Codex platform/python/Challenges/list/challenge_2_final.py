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

def populate_the_number(my_list,special_number_range_end=69):
  if special_number_range_end==69:
    for num in range(0,5):
      my_list.append(random.randint(1,special_number_range_end))
  else:
      my_list.append(random.randint(1,special_number_range_end))

#Populating the list elements:
populate_the_number(my_numbers)
populate_the_number(winning_numbers)
populate_the_number(my_numbers,26)
populate_the_number(winning_numbers,26)

#Displaying the Output:
print(f"My Numbers: {my_numbers} \nWinning Numbers: {winning_numbers}")








