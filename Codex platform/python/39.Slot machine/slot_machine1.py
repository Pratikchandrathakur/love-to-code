# Write code below 💖

import random

symbols = [ '🍒',' 🍇', '🍉','7']
results=random.choices(symbols,k=3)

if results[0]=='7' and results[1]=='7'and results[2]=='7':
  print(" |".join(results))
  print("Jackpot!!")
else:
  print(" |".join(results))
  print("Thanks for playing!")
    

