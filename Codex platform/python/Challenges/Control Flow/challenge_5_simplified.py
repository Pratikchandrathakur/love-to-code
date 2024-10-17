# 🧑‍🚀 Planet Weights-->Hard

# The year is 2199... we have become an interplanetary species and can travel to other planets in the solar system! 🚀

# Create a weight conversion program that:

# Asks the user what their Earth weight is (as a float).
# Asks the user for a planet number (as an int).
# Then, use an if/elif/else statement to calculate the user's weight on the destination planet.

# To calculate the user's weight:

# destination weight=Earth weight × relative gravity
# Number	Planet	Relative Gravity
# 1	Mercury	0.38
# 2	Venus	0.91
# 3	Mars	0.38
# 4	Jupiter	2.53
# 5	Saturn	1.07
# 6	Uranus	0.89
# 7	Neptune	1.14
# If the user enters a planet number outside of 1 - 7, print a message that says 'Invalid planet number'.
# Write code below 💖
#Planet Weight.
weight_in_earth=float(input("Enter your weight in earth "))
planet_number=int(input("Enter the planet number"))
destination_planets=['Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune']
if planet_number==1:
  destination_planet_weight=weight_in_earth*0.38;
  print(f"Your weight on {destination_planets[0]} is {destination_planet_weight}")
elif planet_number==2:
  destination_planet_weight=weight_in_earth*0.91;
  print(f"Your weight on {destination_planets[1]} is {destination_planet_weight}")
elif planet_number==3:
  destination_planet_weight=weight_in_earth*0.38;
  print(f"Your weight on {destination_planets[2]} is {destination_planet_weight}")
elif planet_number==4:
  destination_planet_weight=weight_in_earth*2.53;
  print(f"Your weight on {destination_planets[3]} is {destination_planet_weight}")
elif planet_number==5:
  destination_planet_weight=weight_in_earth*1.07;
  print(f"Your weight on {destination_planets[4]} is {destination_planet_weight}")
elif planet_number==6:
  destination_planet_weight=weight_in_earth*0.89;
  print(f"Your weight on {destination_planets[5]} is {destination_planet_weight}")
elif planet_number==7:
  destination_planet_weight=weight_in_earth*1.14;
  print(f"Your weight on {destination_planets[6]} is {destination_planet_weight}")
else:
  print("Invalid planet number")
