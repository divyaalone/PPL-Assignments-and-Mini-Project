#question 4
#guess number

import random
n = random.randint(1, 100)
guess = int(input("Enter an integer from 1 to 100: "))

while n != "guess":
    if guess < n:
        print("Your guess is low")
        guess = int(input("Enter an integer from 1 to 100: "))
    elif guess > n:
        print("Your guess is high")
        guess = int(input("Enter an integer from 1 to 100: "))
    else:
        print("Correct guess")
        break
