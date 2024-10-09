# Write code below 💖
class Restaurant:
  name=''
  category=''
  rating=0.0
  delivery=True
# bobs burger restaurant objects creation and props filling.
bobs_burgers=Restaurant()
bobs_burgers.name='Bob\'s Burgers'
bobs_burgers.category='American Diner'
bobs_burgers.rating=4.7
bobs_burgers.delivery=True

#Chincha Piro restaurant objects creation and props filling.
chincha_piro=Restaurant()
chincha_piro.name='Chincha Piro'
chincha_piro.category='Nepali lunch '
chincha_piro.rating='4.0'
chincha_piro.delivery=False

# Hansraj restaurant objects creation and props filling.
hansraj=Restaurant()
hansraj.name="Hanshraj Mithai Pasal"
hansraj.category="Desert Cuisine"
hansraj.rating=5.0
hansraj.delivery=False

#Printing the objects:
print(vars(bobs_burgers))
print(vars(chincha_piro))
print(vars(hansraj))
