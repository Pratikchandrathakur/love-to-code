# Write code below 💖

import random
def play():
  while True:
    symbols = [ '🍒',' 🍇', '🍉','7']
    results=random.choices(symbols,k=3)
    if results[0]=='7' and results[1]=='7'and results[2]=='7':
      print(" |".join(results))
      print("Jackpot! 💰")
    else:
      print(" |".join(results))
    # Ask if the player wants to play again
    play_again=input("Do you want to play again? (Y/N): ").strip().upper()
    if play_again !="Y":
      print("Thanks for playing! Goodbye!")
      break

play()
