import random

# Split string method
names_string = input("\n Give me everybody's name (separated by a comma): ")
names = names_string.split(", ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
bill_payer = random.choice(names)
print(f"\n\tToday's bill will be paid by: {bill_payer}  ;)\n")
