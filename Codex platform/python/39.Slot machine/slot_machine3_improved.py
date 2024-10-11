import random

def play():
    symbols = ['🍒', '🍇', '🍉', '7️⃣']
    
    while True:
        # Get three random symbols
        results = random.choices(symbols, k=3)
        
        # Print the results
        print(" | ".join(results))
        
        # Check for jackpot
        if all(symbol == '7️⃣' for symbol in results):
            print("Jackpot! 💰")
        else:
            print("Thanks for playing!")
        
        # Ask if the player wants to play again
        play_again = input("Do you want to play again? (Y/N): ").strip().upper()
        if play_again != 'Y':
            print("Thanks for playing! Goodbye!")
            break

# Start the game
play()
