# Write code below 💖
from math import pi
from random import choice as ch
planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Saturn'
]
random_planet=ch(planets)
# print(random_planet)
def area(planet,r):
  area=4*pi*(r**2)
  print(f"The area of {planet} is {round(area)}")
if random_planet =='Mercury':
  area('Mercury',2440)
elif random_planet=='Venus':
  area('Venus',6052)
elif random_planet=='Earth':
  area('Earth',6371)
elif random_planet=='Mars':
  area('Mars',3390)
elif random_planet=='Saturn':
  area('Saturn',58232)
else:
  print("Oops! An error occurred.")
