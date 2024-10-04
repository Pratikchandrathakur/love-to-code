# 5. Basic Debugging with Python's Built-in Debugger (pdb)
Python comes with a built-in tool called pdb that lets you pause your program and step through it line by line.
This might sound tricky, but you only need to know a couple of basic commands to get started.

Example:
```
import pdb

def add_numbers(a, b):
    pdb.set_trace()  # This is where the program will pause
    result = a + b
    return result

print(add_numbers(2, 3))
```
### When the program reaches pdb.set_trace(), it will pause, and you can enter commands to inspect the program.

Here are some basic commands:

- n (next): Go to the next line of code.
- p <variable>: Print the value of a variable (e.g., p a to see the value of a).
- c (continue): Resume running the program.
Why is this useful?: Using pdb lets you check what’s happening in your program at each step, which makes it easier to find where things go wrong.
It’s like pausing a movie to take a closer look at the details.

## 7. Common Python Errors
 Let’s look at some common Python errors and what they mean:

- SyntaxError: You might have missed a colon (:) or made a typo in your code.
- TypeError: You tried to do something with two incompatible types (like adding a string to a number).
- IndexError: You tried to access an index in a list that doesn’t exist.
Example of an IndexError:
```
my_list = [1, 2, 3]
print(my_list[5])  # This will raise an IndexError because index 5 doesn’t exist
```
Why is this useful?: Understanding these errors will help you fix them faster. Once you recognize what each error means, you’ll know exactly what to do.


