# 🧑‍🚀 Planet Weights
# Hard

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
def weight_on_planet(weight_in_earth, planet_number):
    planets = {
        1: {"name": 'Mercury', "gravity": 0.38},
        2: {"name": 'Venus', "gravity": 0.91},
        3: {"name": 'Mars', "gravity": 0.38},
        4: {"name": 'Jupiter', "gravity": 2.53},
        5: {"name": 'Saturn', "gravity": 1.07},
        6: {"name": 'Uranus', "gravity": 0.89},
        7: {"name": 'Neptune', "gravity": 1.14}
    }
    
    # check if the planet_number is valid
    if planet_number not in planets.keys():
        return "Invalid planet number"

    planet_info = planets[planet_number]
    destination_planet_weight = weight_in_earth * planet_info["gravity"]
    return f"Your weight on {planet_info['name']} is {destination_planet_weight}"

weight_in_earth=float(input("Enter your weight in earth "))
planet_number=int(input("Enter the planet number"))
print(weight_on_planet(weight_in_earth, planet_number))
