1# Write code below 💖
Slytherin=0
Hufflepuff=0
Ravenclaw=0
Gryffindor=0
print("Q1) Do you like Dawn or Dusk? 1) Dawn  2) Dusk")
a=int(input("Enter 1 or 2 "))


if(a==1):
  Gryffindor=a+1
  Ravenclaw=a+1
  print(Gryffindor)
  print(Ravenclaw)

elif(a==2):
  Hufflepuff= a + 1
  Slytherin = a +1
  print(Hufflepuff)
  print(Slytherin)

else:
  print("Wrong input.")

print("Q2) When I’m dead, I want people to remember me as:  1) The Good 2) The Great 3) The Wise 4) The Bold")
a=int(input("Enter one of them: 1,2,3,4 "))
if(a==1):
 Hufflepuff =Hufflepuff+2
 print(Hufflepuff)

elif(a==2):
  Slytherin =Slytherin+2
  print(Slytherin)
elif(a==3):
  Ravenclaw =Ravenclaw+2
  print(Ravenclaw)

elif(a==4):
  Gryffindor =Gryffindor+2
  print(Gryffindor)
else:
  print("Wrong input.")

print(Gryffindor)

print("Q3) Which kind of instrument most pleases your ear? 1) The violin 2) The trumpet 3) The piano  4) The drum")
a=int(input("Enter one of them: 1,2,3,4 "))

if(a==1):
  Slytherin=Slytherin+4
elif(a==2):
  Hufflepuff=Hufflepuff+4
elif(a==3):
  Ravenclaw=Ravenclaw+4
elif(a==4):
  Gryffindor =Gryffindor+4
else:
  print("Wrong input.")

if(Slytherin >> Hufflepuff>>Ravenclaw>>Gryffindor):
  print("Slytherin is the largest")
elif(Hufflepuff>>Slytherin>>Ravenclaw>>Gryffindor):
  print("Hufflepuff is the largest")
elif(Ravenclaw>>Hufflepuff>>Slytherin>>Gryffindor):
  print("Ravenclaw is the largest ")
else:
  print("Gryffindor is the largest ")










