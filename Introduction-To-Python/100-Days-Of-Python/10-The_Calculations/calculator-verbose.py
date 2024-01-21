"""
Dev: @skywalkerSam
Aim: Simple Calculator Program
Date: 12022.10.05.15:15:00
"""
from cmath import log


logo = """
 _____________________
|  _________________  |
| | Pythonista   0. | |  .----------------.  .----------------.  .----------------.  .----------------. 
| |_________________| | | .--------------. || .--------------. || .--------------. || .--------------. |
|  ___ ___ ___   ___  | | |     ______   | || |      __      | || |   _____      | || |     ______   | |
| | 7 | 8 | 9 | | + | | | |   .' ___  |  | || |     /  \     | || |  |_   _|     | || |   .' ___  |  | |
| |___|___|___| |___| | | |  / .'   \_|  | || |    / /\ \    | || |    | |       | || |  / .'   \_|  | |
| | 4 | 5 | 6 | | - | | | |  | |         | || |   / ____ \   | || |    | |   _   | || |  | |         | |
| |___|___|___| |___| | | |  \ `.___.'\  | || | _/ /    \ \_ | || |   _| |__/ |  | || |  \ `.___.'\  | |
| | 1 | 2 | 3 | | x | | | |   `._____.'  | || ||____|  |____|| || |  |________|  | || |   `._____.'  | |
| |___|___|___| |___| | | |              | || |              | || |              | || |              | |
| | . | 0 | = | | / | | | '--------------' || '--------------' || '--------------' || '--------------' |
| |___|___|___| |___| |  '----------------'  '----------------'  '----------------'  '----------------' 
|_____________________|

"""


def add(x, y):
    return x + y


def subtract(x, y):
    return x - y


def multiply(x, y):
    return x * y


def divide(x, y):
    return x / y


def no_quotient(x, y):
    return x // y


def exponent(x, y):
    return x ** y


op_dict = {
    "+": add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '//': no_quotient,
    '**': exponent,
}


def calculate():
    print(logo)
    try:
        first_number = float(input("\nEnter First Number: "))
        for key in op_dict.keys():
            print(key)
        operation = input("\nEnter An Operation: ")
        second_number = float(input("Enter The Second Number: "))
        output = op_dict[operation](first_number, second_number)
        print(
            f"\nCalculation: {first_number} {operation} {second_number} =   {output}")
        while True:
            proceed = input(
                "\nDo You Want To Continue? (Y or N) (A for new calculation): ").lower()
            if proceed == 'y':
                try:
                    first_number = output
                    print(f"Last Output: {first_number}")
                    for key in op_dict.keys():
                        print(key)
                    operation = input("\nEnter An Operation: ")
                    second_number = float(input("Enter The Second Number: "))
                    output = op_dict[operation](first_number, second_number)
                    print(
                        f"\nCalculation: {first_number} {operation} {second_number} =   {output}")
                    continue
                except ValueError:
                    print(
                        "\n\n\t Please enter the values carefully ;(\n".title())
                    continue
                except KeyError:
                    print(
                        "\n\n\t Please specify a valid Operation [+, -, *, /]   ;(\n".title())
                    continue
            elif proceed == 'n':
                break
            elif proceed == 'a':
                calculate()
            else:
                print("\n\n\t Please enter the values carefully ;(\n".title())
                continue
    except KeyboardInterrupt:
        print("\n\n\n\tOperation Cancelled By User :(\n\n")
    except ValueError:
        print("\n\n\t Please enter the values carefully ;(\n".title())
        calculate()
    except KeyError:
        print(
            "\n\n\t Please specify a valid Operation [+, -, *, /]   ;(\n".title())
        calculate()


if __name__ == "__main__":
    calculate()
