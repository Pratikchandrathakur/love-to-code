# 🐶 Dog Years-->Medium
# People say that every year of a dog's life is roughly equal to seven years of a human's life. 🥲

# Write a dog_years() function that takes two parameters:

# name (string)
# age (integer)
# It should calculate and return a string featuring the dog's name as well as its age in human years.

# For example, if the dogs Landon, Red, and Cooper were 3, 6, and 2 years old respectively, the output would look like:

# dog_years('Landon', 3)
# dog_years('Red Bean', 6)
# dog_years('Cooper', 2)

# # Output:
# # Landon is 21 years old in human years.
# # Red Bean is 42 years old in human years.
# # Cooper is 14 years old in human years.

# Note: Make sure your output matches what's in the code comments above.
# Write code below 💖

def dog_years(name,age):
  human_years=age*7
  return f"{name} is {human_years} years old in human years."

dog_age_in_human_years=dog_years('Landon',3)
print(dog_age_in_human_years)
