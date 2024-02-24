'''
Developer: @skywalkerSam
Purpose: Password Generator Project...
Date: 12022.09.19.23:27:00
'''

import random as rd

# Intro
print("""
    ###############################################
            ***** Password Generator *****
                  ^^^^^^^^^^^^^^^^^^
                        _____
""")
# Password combinations
symbols_list = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
letters_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
integers_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

# User choices
num_symbols = int(input("Number Of Symbols : "))
num_letters = int(input("Number Of Letters : "))
num_integers = int(input("Number Of Integers: "))


# Simple & Strong password...
symbols_one = rd.sample(symbols_list, num_symbols)
letters_one = rd.sample(letters_list, num_letters)
integers_one = rd.sample(integers_list, num_integers)
password_one = symbols_one + letters_one + integers_one

simple_password = "".join([c for c in password_one])
print(f"\n\t A Simple & Strong Password: {simple_password}\n")


# Pro password...
pro_password = "".join(rd.sample(simple_password, len(simple_password)))
print(f"\n\t A Pro Password: {pro_password}\n")
