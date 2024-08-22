'''
Dev: @skywalkerSam
Aim: Project - The Coffee Machine
Date: 12022.11.09.02:42
'''

import machine_art as mrt
import machine_configuration as mcfg
import time
import os


machine_logo = mrt.machine
processing_art = mrt.processing
coffee_art = mrt.coffee
MENU = mcfg.coffee_configs
machine_resources = {
    "water": 1500,
    "milk": 1500,
    "coffee": 300,
    "money": 0,
}


espresso_water = MENU["espresso"]['ingredients']['water']
espresso_coffee = MENU["espresso"]['ingredients']['coffee']
espresso_cost = MENU['espresso']['cost']
cappuccino_water = MENU["cappuccino"]['ingredients']['water']
cappuccino_coffee = MENU["cappuccino"]['ingredients']['coffee']
cappuccino_milk = MENU["cappuccino"]['ingredients']['milk']
cappuccino_cost = MENU['cappuccino']['cost']
latte_water = MENU["latte"]['ingredients']['water']
latte_coffee = MENU["latte"]['ingredients']['coffee']
latte_milk = MENU["latte"]['ingredients']['milk']
latte_cost = MENU['latte']['cost']
water_resource = machine_resources['water']
coffee_resource = machine_resources['coffee']
milk_resource = machine_resources['milk']
money_collected = machine_resources['money']


def coffe_menu():
    print("\nCoffee List:\n")
    print(f"\t1. Espresso     - {espresso_cost}$")
    print(f"\t2. Cappuccino   - {cappuccino_cost}$")
    print(f"\t3. Latte        - {latte_cost}$\n\n")


def make_coffee():
    os.system('cls')
    global espresso_water
    global espresso_coffee
    global espresso_cost
    global cappuccino_water
    global cappuccino_coffee
    global cappuccino_milk
    global cappuccino_cost
    global latte_water
    global latte_coffee
    global latte_milk
    global latte_cost
    global water_resource
    global coffee_resource
    global milk_resource
    global money_collected
    coffe_menu()
    while True:
        user_choice = input("\n\nWhat'd you like today?  (E\C\L): ").lower()
        if user_choice == 'e':
            check_water = water_resource - espresso_water
            check_coffee = coffee_resource - espresso_coffee
            if check_water >= espresso_water and check_coffee >= espresso_coffee:
                user_bill = espresso_cost
                water_resource -= espresso_water
                coffee_resource -= espresso_coffee
                money_collected += user_bill
                print(f"\n[Your bill: {user_bill}$ ]\n")
                user_id = input("\n\tEnter Your ID: ")
                user_password = input("\tEnter Your Password: ")
                # with open("./user_data.csv", mode="a") as user_data:
                #     user_data.write(f"\n{user_id}, {user_password}, {user_bill}")
                #     user_data.close()
                print(processing_art)
                time.sleep(10)
                print(coffee_art)
                continue
            else:
                os.system('cls')
                print(
                    "\n\n\n\t Unable to process request at this time  :(\n\n".title())
                break

        elif user_choice == 'c':
            check_water = water_resource - cappuccino_water
            check_coffee = coffee_resource - cappuccino_coffee
            check_milk = milk_resource - cappuccino_milk
            if check_water >= cappuccino_water and check_coffee >= cappuccino_coffee and check_milk >= cappuccino_milk:
                user_bill = cappuccino_cost
                water_resource -= cappuccino_water
                coffee_resource -= cappuccino_coffee
                milk_resource -= cappuccino_milk
                money_collected += user_bill
                print(f"\n[Your bill: {user_bill}$ ]\n")
                user_id = input("\n\tEnter Your ID: ")
                user_password = input("\tEnter Your Password: ")
                # with open("./user_data.csv", mode="a") as user_data:
                #     user_data.write(f"\n{user_id}, {user_password}, {user_bill}")
                #     user_data.close()
                print(processing_art)
                time.sleep(10)
                print(coffee_art)
                continue
            else:
                os.system('cls')
                print(
                    "\n\n\n\t Unable to process request at this time  :(\n\n".title())
                break

        elif user_choice == 'l':
            check_water = water_resource - latte_water
            check_coffee = coffee_resource - latte_coffee
            check_milk = milk_resource - latte_milk
            if check_water >= latte_water and check_coffee >= latte_coffee and check_milk >= latte_milk:
                user_bill = latte_cost
                water_resource -= latte_water
                coffee_resource -= latte_coffee
                milk_resource -= latte_milk
                money_collected += user_bill
                print(f"\n[Your bill: {user_bill}$ ]\n")
                user_id = input("\n\tEnter Your ID: ")
                user_password = input("\tEnter Your Password: ")
                # with open("./user_data.csv", mode="a") as user_data:
                #     user_data.write(f"\n{user_id}, {user_password}, {user_bill}")
                #     user_data.close()
                print(processing_art)
                time.sleep(10)
                print(coffee_art)
                continue
            else:
                os.system('cls')
                print(
                    "\n\n\n\t Unable to process request at this time  :(\n\n".title())
                break
        elif user_choice == 'clear':
            os.system('cls')
            continue
        elif user_choice == 'exit':
            os.system('cls')
            break
        else:
            os.system('cls')
            print("\n\n\n\t Please select a valid option & Try Again  :(\n\n")
            continue


def machine_report():
    os.system('cls')
    print("\nMachine Report:\n")
    print(f"\tCoffe Left: {coffee_resource} Grams")
    print(f"\tMilk Left: {milk_resource} ML")
    print(f"\tWater Left: {water_resource} ML")
    print(f"\tMoney Collected: {money_collected}$\n\n")


def machine_off():
    os.system('cls')
    print("\n\n\t\tThe Coffee Machine, Shutting Down...\n\n")


def machine_on():
    os.system("cls")
    print(machine_logo)
    print("\nThe Coffee Machine, Powering ON...\n\n")
    time.sleep(5)
    try:
        while True:
            machine_prompt = input(
                "\n\tMachine's ready, Let's GO >_  ").lower()
            if machine_prompt == 'coffee':
                make_coffee()
                continue
            elif machine_prompt == 'menu':
                coffe_menu()
                continue
            elif machine_prompt == 'report':
                machine_report()
                continue
            elif machine_prompt == "users":
                os.system('cls')
                with open("user_data.csv") as user_data:
                    print(user_data.read())
                continue
            elif machine_prompt == 'poweroff':
                machine_off()
                break
            else:
                os.system('cls')
                print(
                    "\n\tPlease select a valid option & try again...  :(\n".title())
                continue
    except KeyboardInterrupt:
        os.system('cls')
        print("\n\n\n\tOperation Cancelled, Shutting Down...\n\n")
        exit()


if __name__ == '__main__':
    machine_on()


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
