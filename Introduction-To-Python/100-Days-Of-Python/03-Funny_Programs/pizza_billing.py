"""
Developer: @skywalkerSam
Purpose: Learning
Date: 12022.09.07.22:03
"""

#intro
from cgitb import small
from cmath import pi


print("""
        ###################################
                ***Pizza Galaxy***
        ###################################

small_pizza = 10$
regular_pizza = 20$
large_pizza = 30$
""")
#user 
pizza_size = input("What size pizza you want? S, R or L: ")
cheese = input("Do you want extra cheese? (+5$) Y or N: ")
toppings = input("Do you want extra toppings? (+5$) Y or N: ")

if pizza_size == "s":
    cost = 10
elif pizza_size == "r":
    cost = 20
elif pizza_size == "l":
    cost = 30
else:
    print("\n\t Sorry, Please select a valid option & Try Again!!! \n")

if pizza_size == 's' and cheese == 'y':
    cost += 2
elif pizza_size == 'r' and cheese == 'y':
    cost += 3
elif pizza_size == 'l' and cheese == 'y':
    cost += 5

if toppings == "y":
    cost += 5

#final bill
print(f"\n\t Your total bill: {cost}$ :) \n")
