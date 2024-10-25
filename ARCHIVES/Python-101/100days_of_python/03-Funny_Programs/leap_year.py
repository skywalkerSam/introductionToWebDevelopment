"""
Tip: Flowcharts are really helpful & important...
"""
year = int(input("Enter the year: "))

if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("A Leap Year :)") 
        else:
            print("Not a Leap Year :(")
    else:
        print("A Leap Year :)")
else:
    print("Not a Leap Year :(")




"""
# Legacy Code...


if year % 4 == 0:
    if year % 100 != 0:
        print("Leap Year :)")
    else:
        if year % 400 == 0:
            print("Leap Year :)")
        else:
            print("Not a Leap Year :(")
else:
    print("Not a Leap Year :(")

"""
