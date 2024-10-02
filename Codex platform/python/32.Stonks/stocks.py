# Write code below 💖

stock_prices = [34.68, 36.09, 34.94, 33.97, 34.68, 35.82, 43.41, 44.29, 44.65, 53.56, 49.85, 48.71, 48.71, 49.94, 48.53, 47.03, 46.59, 48.62, 44.21, 47.21]

def price_at(x):
  print(f"Day {x}: {stock_prices[x-1]}")
price_at(2) #put the day that you want to see stock of.

def max_price(a,b):
  to_check=stock_prices[a-1:b-1]
  print(f"the maximum price from Day {a} to Day {b} is {max(to_check)}")

max_price(1,14) # from day 1 to day 7.

def min_price(a,b):
  to_check=stock_prices[a-1:b-1] #slicing the list and making another list to check for min and max.
  print(f"the minimum price from Day {a} to Day {b} is {min(to_check)}") #min and max only takes one value that is list to work on.

min_price(2,9)
