# 🚨 Don't change the code below 👇
height = input("enter your height in (m): ")
weight = input("enter your weight in (kg): ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
bmi = float(weight)/float(height)**2
rounded_bmi = round(bmi, 2)
estimated_bmi = round(bmi)
print(f"BMI: {estimated_bmi} ({rounded_bmi})")

if bmi < 18.5:
    print("Underweight !!!")
elif bmi < 25:
    print("Normal Weight :)")
elif bmi < 30:
    print("Overweight ;(")
elif bmi < 35:
    print("Obese :(")
else:
    print("Clinically Obese !!!")



