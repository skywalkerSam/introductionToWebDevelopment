# 🚨 Don't change the code below 👇
from unicodedata import name


print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇

names = name1+name2.lower()
t = names.count('t')
r = names.count('r')
u = names.count('u')
e = names.count('e')
l = names.count('l')
o = names.count('o')
v = names.count('v')
e = names.count('e')

true = t+r+u+e
love = l+o+v+e
score = str(true)+str(love)
points = int(score)

#result
if points <= 10 or points >= 90:
    print(f"Your score is {score}, You go together like Coke & Mentos ;) ") 
elif points >= 25 and points <= 75:
    print(f"Your score is {score}, You're alright together :)")
else:
    print(f"Your score is {score}...")