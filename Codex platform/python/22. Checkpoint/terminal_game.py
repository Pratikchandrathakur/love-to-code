import random


# Player and NPC stats
player_hp = 100
player_attack_power = 20
player_heal_power = 15


npc_hp = 80
npc_attack_power = 15


# Main game loop
while player_hp > 0 and npc_hp > 0:
    # Display current status
    print(f"\nPlayer HP: {player_hp} | NPC HP: {npc_hp}")
    
    # Player's turn
    print("Choose your action: 1) Attack 2) Block 3) Heal")
    choice = input()


    if choice == "1":  # Player attacks
        damage = random.randint(1, player_attack_power)
        npc_hp -= damage
        print(f"Player attacks NPC for {damage} damage!")
    
    elif choice == "2":  # Player blocks (currently just for display)
        print("Player is blocking the next attack!")
    
    elif choice == "3":  # Player heals
        heal_amount = random.randint(1, player_heal_power)
        player_hp += heal_amount
        print(f"Player heals for {heal_amount} HP!")
    
    # Check if NPC is defeated
    if npc_hp <= 0:
        print("NPC has been defeated!")
        break


    # NPC's turn (random behavior )
    npc_action = random.randint(1, 2)  # 1 means attack, 2 means nothing
    
    if npc_action == 1:  # NPC attacks
        damage = random.randint(1, npc_attack_power)
        player_hp -= damage
        print(f"NPC attacks Player for {damage} damage!")
    else:
        print("NPC does nothing this turn.")
    
    # Check if player is defeated
    if player_hp <= 0:
        print("Player has been defeated!")
        break


# Game over message
if player_hp > 0:
    print("\nPlayer wins the battle!")
else:
    print("\nNPC wins the battle!")

#Keep attacking you will win.
