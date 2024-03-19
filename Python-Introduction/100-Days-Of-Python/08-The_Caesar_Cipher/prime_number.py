# Write your code below this line 👇
prime_count = []
def prime_checker(number):
    for num in range(1, number):
        if number % num == 0:
            prime_count.append(num)
    if len(prime_count) == 1:
        print(f"\n\t{number} is a Prime Number :)\n")
    else:
        print(f"\n\t{number} isn't a Prime Number :(  but, It is a Composite Number :)\n")

# Write your code above this line 👆

# Do NOT change any of the code below👇
n = int(input("Check this number: "))
prime_checker(number=n)

