# Write code below 💖
class BankAccount:
  def __init__(self,first_name,last_name,account_id,account_type,pin,balance):
    self.first_name=first_name
    self.last_name=last_name
    self.account_id=account_id
    self.account_type=account_type
    self.pin=pin
    self.balance=balance
  def deposit(self):
    new_ammount=int(input("Enter the deposit amount "))
    self.balance+=new_ammount
    return self.balance
  def withdraw(self):
    withdrawn=int(input("Enter the amount you want to withdraw "))
    self.balance-=withdrawn
    return self.balance
  def display_balance(self):
    print(f"Current balance in your account is ${self.balance}")

pratik_account=BankAccount('Pratik Chandra','Thakur','2728382y38','Saving',1234,100)
pratik_account.display_balance()
pratik_account.deposit()
pratik_account.display_balance()
pratik_account.withdraw()
pratik_account.display_balance()
