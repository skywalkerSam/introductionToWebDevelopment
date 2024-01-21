print("""#####################################
            Welcome To The Rollercoaster...
        #################################################
        """)
height = int(input("What is your height in cm? "))
bill = 0

if height >= 120:
    print("\n\t You can ride :)")
    age = int(input("\nEnter your age: "))
    if age >= 18:
        bill = 12
        print("Adult Ticket: $12")
    elif age >= 12:
        bill = 7
        print("Youth Ticket: $7")
    else:
        bill = 5
        print("Children Ticket: $5")

    #Midlife Crisis compensation
    if age >= 45 and age <= 65:
        bill = 0
        print("\n\t Midlife Crisis Compensation Applied :)")

    image_price = input("\n Do you want a photo taken? Y OR N: ")

    if image_price == "y":
        bill += 3

    print(f"\n\t Your final bill: {bill}$ :)\n")

else:
    print("You can't ride right now :(")
