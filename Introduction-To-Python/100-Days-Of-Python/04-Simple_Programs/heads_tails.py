from random import randint, choice

coin = randint(0, 1)

if coin == 0:
    print("\n\t Heads!\n")
elif coin == 1:
    print("\n\t Tails!\n")
else:
    print("\n Something went wrong please try again :(")

