# Write code below 💖
number1=float(input("Enter your first number  "))
operator_select=input("Enter the operator among these: +, -,%,/,*,**,^  ")
number2=float(input("Enter your first number  "))

if(operator_select == "+"):
  print(number1+number2);
elif(operator_select == "-"):
  print(number1-number2);
elif(operator_select == "*"):
  print(number1*number2);
elif(operator_select == "/"):
  print(number1/number2);
elif(operator_select == "**" or operator_select == "^"):
  print(number1**number2);
elif(operator_select == "%"):
  print(number1%number2);
