print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')
print("\t\t\t Welcome to Treasure Island.\n")
print(">_ Your mission is to find the treasure..")

#Write your code below this line 👇

step1 = input("\nWhere would you like to go? (Left OR Right): ").lower()
if step1 == "left":
    step2 = input("\nYou want to 'Swim' OR 'Wait': ").lower()
    if step2 == 'wait':
        step3 = input("Which door world you like to open? (Red, Green OR, Blue): ").lower()
        if step3 == 'green':
            print("\n\t You've done it, The treasure is all yours :) \n")
        elif step3 == 'red':
            print("\n\t Game Over, killed by the 'Penguins' ;) \n")
        elif step3 == 'blue':
            print("""
            ##########################################
                    >_ Welcome to the matrix...*
            ##########################################
                    """)

    elif step2 == 'swim':
        print("\n\t Game Over, killed by the 'Dolphins' ;) \n")
    else:
        print("\n\t Please read the instructions carefully :(")
elif step1 == 'right':
    print("\n\t Game Over, BOOM!!! \n")
else:
    print("\n\t Please read the instructions carefully :(")