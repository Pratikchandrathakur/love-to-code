import unittest
from atm import atm_withdrawal # we need to be in same folder remember that.

class TestATMWithdrawal(unittest.TestCase):

  def test_insufficient_funds(self):
    message,new_balance = atm_withdrawal(100,150)
    self.assertEqual(message,"Insufficient funds")
    self.assertEqual(new_balance,100)

def test_invali_amount(self):
    message,new_balance = atm_withdrawal(100,-20)
    self.assertEqual(message,"Invalid amount")
    self.assertEqual(new_balance,100)

def test_successful_transaction(self):
    message,new_balance = atm_withdrawal(100,50)
    self.assertEqual(message,"Transaction successful")
    self.assertEqual(new_balance,50)

if __name__=="__main__":
  unittest.main
