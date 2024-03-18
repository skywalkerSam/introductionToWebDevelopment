print("Welcome to the tip calculator...")
bill = input("What was the bill? $")
tip = input("What percentage tip would you like to give? ")
people = input("How many people to split the bill? ")
total_bill = float(bill)+float(bill)*float(tip)/100
one_person_bill = total_bill/int(people)
final_bill = round(one_person_bill, 2)
final_bill = "{:.2f}".format(one_person_bill)
output = f"Each person should pay: ${final_bill}"

print(output)