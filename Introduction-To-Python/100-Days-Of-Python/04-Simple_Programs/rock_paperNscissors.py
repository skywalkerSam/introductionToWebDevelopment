import random as rd

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇

print("""
            #############################################
                ****** ROCK, PAPER & SCISSORS ******
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Rules:
    1. Rock wins over Scissors.
    2. Scissors wins over Paper..
    3. Paper wins over Rock...

    (1 - Rock)
    (2 - Paper)
    (3 - Scissors)
""")

user = int(input("Your Move: "))
if user == 1:
    print(f"You: {rock}")
elif user == 2:
    print(f"You: {paper}")
elif user == 3:
    print(f"You: {scissors}")
else:
    print("""
    Please choose between 1 - 3 :(
        (1 - Rock)
        (2 - Paper)
        (3 - Scissors)
    """)



comp = rd.randint(1, 3)
if comp == 1:
    print(f"AI: {rock}")
elif comp == 2:
    print(f"AI: {paper}")
elif comp == 3:
    print(f"AI: {scissors}")
else:
    print("\n\t Something went wrong at our end, Pease Try Again :(\n  ")


if user == 1 and comp == 3:
    print("\n\t You Won, Congratulations :)\n")
elif user == 3 and comp == 2:
    print("\n\t You Won, Congratulations :)\n")
elif user == 2 and comp == 1:
    print("\n\t You Won, Congratulations :)\n")
elif comp == 1 and user == 3:
    print("\n\t AI Won :(\n")
elif comp == 3 and user == 2:
    print("\n\t AI Won :(\n")
elif comp == 2 and user == 1:
    print("\n\t AI Won :(\n")
elif comp == 1 and user == 1:
    print("\n\t ***DRAW***\n")
elif comp == 3 and user == 3:
    print("\n\t ***DRAW***\n")
elif comp == 2 and user == 2:
    print("\n\t ***DRAW***\n")
else: 
    print("\n\t Please read the rules carefully & Try Again...\n")





