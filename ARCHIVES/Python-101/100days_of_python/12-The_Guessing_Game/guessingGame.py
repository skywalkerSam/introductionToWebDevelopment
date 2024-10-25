import random as rd


guess = rd.randint(0, 101)
print(guess)


def guess_the_number():
    try:
        level = input("\nWanna go easy? (Y/N): ").lower()
        if level == "y":
            attempts = 10
        else:
            attempts = 5

        while attempts != 0:
            print(f"\n {attempts} Attempts Left...")
            attempts -= 1
            user_guess = int(input("\nGuess the number: "))
            if user_guess == guess:
                print("\n\t You're right  :)\n")
                break
            elif user_guess < guess:
                print("\n\t Try somethin' higher  :(\n")
                continue
            elif user_guess > guess:
                print("\n\t Try somethin' lower  :(\n")
                continue
    except ValueError:
        print("\n\tEnter the values carefully  :( \n".title())
    except KeyboardInterrupt:
        print("\n\t Operation cancelled by user  :( \n".title())


if __name__ == '__main__':
    guess_the_number()
