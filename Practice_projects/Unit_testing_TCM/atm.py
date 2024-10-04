def atm_withdrawal(balance,amount):
  if amount>balance:
    return "Insufficient funds",balance
  elif amount<=0:
    return "Invalid amount", balance
  else:
    balance -=amount
    return "Transaction successful", balance
