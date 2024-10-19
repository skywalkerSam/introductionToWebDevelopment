import random as rd
import art
import data
import os

def play_game():
    try:
        print(art.logo)
        option_a = rd.choice(data.data)
        option_b = rd.choice(data.data)
        if option_a == option_b:
            option_b = rd.choice(data.data)
        user_score = 0
        while True:
            if user_score >= 1:
                os.system("cls")
            print(f"\n\n[Your Current Score: {user_score}]\n\n")
            print(f"[Option-A]: {option_a['name']}, a {option_a['description']}, from {option_a['country']}")
            print(art.versus)
            print(f"[Option-B]: {option_b['name']}, a {option_b['description']}, from {option_b['country']}")
            user_input = input("\n\tWhat do you think? (A/B): ").lower()
            if user_input == 'a':
                a = option_a
                b = option_b
                if a["follower_count"] > b["follower_count"]:
                    user_score += 1
                    option_a = option_b
                    option_b = rd.choice(data.data)
                    if option_a == option_b:
                        option_b = rd.choice(data.data)
                    continue
                else:
                    print(f"\n\n[Your final score: {user_score}]\n\n")
                    break
            elif user_input == 'b':
                a = option_a
                b = option_b
                if a["follower_count"] < b["follower_count"]:
                    user_score += 1
                    option_a = option_b
                    option_b = rd.choice(data.data)
                    if option_a == option_b:
                        option_b = rd.choice(data.data)
                    continue
                else:
                    print(f"\n\n[Your final score: {user_score}]\n\n")
                    break
            else:
                print("\n\n\n\t\t Invalid input! Please enter the values carefully :(\n\n")
                continue

    except KeyboardInterrupt:
        print("\n\n\nOperation Cancelled By User :(\n\n\n")
    except ValueError:
        print("\n\n\nEnter The Values Carefully :(\n\n\n")
    except Exception as e:
        print(f"\n\n\n [{e}] \n\n\n")



if __name__ == '__main__':
    play_game()
