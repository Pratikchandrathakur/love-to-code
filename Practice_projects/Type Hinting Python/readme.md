# Type Hinting in Python (Optional Static Typing)
To bridge the gap between static and dynamic typing, Python introduced type hinting (since Python 3.5). 
Type hinting allows you to specify types without enforcing them, providing the best of both worlds: the flexibility of dynamic typing with the clarity of static typing.

## Example of Type Hinting in Python:
```
 def atm_withdrawal(balance: float, amount: float) -> float: 
    if amount > balance:
        return balance
    return balance - amount
```
- The balance: float and amount: float specify that these parameters are expected to be float values, and -> float indicates the return type is also a float.
- Python doesn’t enforce these types, but using them can improve readability and enable tools like linters or type checkers (e.g., mypy) to detect type mismatches before runtime.

## Conclusion:
- Statically Typed Variables: In languages like Java or C++, types are explicitly declared and checked at compile time. This provides safety and performance but at the cost of flexibility.
- Dynamically Typed Variables: Python infers types at runtime, providing greater flexibility but with the trade-off of potential runtime errors.
- Type Hinting in Python: Provides a way to document expected types while retaining Python’s dynamic nature, making code more readable and less error-prone without strict enforcement.
