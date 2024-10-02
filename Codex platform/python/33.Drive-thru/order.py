# Write code below 💖
person=input("Enter Your Name Please! ")
def welcome(name):
  welcome_menu=['🍔 Cheeseburger','🍟 Fries','🥤 Soda','🍦 Ice Cream','🍪 Cookie']
  print("Hello "+name)
  choose=int(input("Enter 1 for 🍔 Cheeseburger , 2 for 🍟 Fries,\n 3 for 🥤 Soda, 4 for🍦 Ice Cream, 5 for🍪 Cookie "))
  if choose==1:
    return "🍔 Cheeseburger"
  elif choose==2:
    return "🍟 Fries"
  elif choose==3:
    return "🥤 Soda"
  elif choose==4:
    return "🍦 Ice Cream"
  elif choose==5:
    return "🍪 Cookie "
  else:
    return "null"

ordering=welcome(person)
def get_item(order):
  if(order!="null"):
    print(f"Here is your ordered {order}")
  else:
    print("Please input a valid input")
get_item(ordering)
