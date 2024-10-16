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
