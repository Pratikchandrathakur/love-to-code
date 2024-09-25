
import random
NPC_health = random.randint(10, 20)
player1_health=int(input("Enter the player 1 health "))
player2_health=int(input("Enter the player 2 health "))
player3_health=int(input("Enter the player 3 health "))

for health in range(10,20):
    if(health==player1_health):
        if(NPC_health>player1_health ):
         print("NPC1 is the winner")
        else:
            print("Player1 is the winner")
    elif(health<player3_health and health>player1_health):
        if(NPC_health>player2_health):
         print("NPC2 is the winner")
        else:
            print("Player2 is the winner")
    elif(health==player3_health):
        if(NPC_health>player3_health):
         print("NPC3 is the winner")
        else:
            print("Player3 is the winner")


