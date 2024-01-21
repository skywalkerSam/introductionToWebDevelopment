import random as rd
import os

logo = """
.------.            _     _            _    _            _    
|A_  _ |.          | |   | |          | |  (_)          | |   
|( \/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \  /|K /\  |     | '_ \| |/ _` |/ __| |/ / |/ _` |/ __| |/ /
|  \/ | /  \ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
`-----| \  / |     |_.__/|_|\__,_|\___|_|\_\ |\__,_|\___|_|\_\\
      |  \/ K|                            _/ |                
      `------'                           |__/           
"""


def play_blackjack():
    try:
        os.system("cls")
        print(logo)
        while True:
            cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
            ai_card = rd.sample(cards, 2)
            user_card = rd.sample(cards, 2)
            print(f"\nUser: {user_card}\t\tAI: {ai_card}")
            if sum(user_card) == 21 and sum(ai_card) == 21:
                print("\n\n\t TIED :)\n")
                continue
            elif sum(user_card) == 21:
                print("\n\n\t Blackjack, You Won :)\n")
                break
            elif sum(ai_card) == 21:
                print("\n\n\t Blackjack, AI Won :(\n")
                break
            user_choice = input("\n\nStand or Hit (S/H): ")
            sequence = [0, 1]
            ai_choice = rd.choice(sequence)
            if user_choice == "h":
                user_card_2 = rd.sample(cards, 1)
                if user_card_2 == 11:
                    user_card_2 = input("\n(1 or 11): ")
                user_total_cards = user_card + user_card_2
            else:
                user_total_cards = user_card

            if ai_choice == 1:
                ai_card_2 = rd.sample(cards, 1)
                ai_total_cards = ai_card + ai_card_2
            else:
                ai_total_cards = ai_card

            print(f"\n\nUser: {user_total_cards}\t\tAI: {ai_total_cards}")

            ai_score = sum(ai_total_cards)
            user_score = sum(user_total_cards)

            if user_score > 21 and ai_score > 21:
                print("\n\n\t Bust ;( \n")
                proceed = input("\nDo you want to continue? (Y/N): ")
                if proceed == "n":
                    exit()
                else:
                    play_blackjack()
            elif user_score == ai_score:
                print("\n\n\t TIED ;) \n")
                continue
            elif user_score > 21:
                print("\n\n\t AI Won :(\n")
            elif ai_score > 21:
                print("\n\n\t You Won :)\n")
            elif user_score > ai_score and user_score <= 21:
                print("\n\n\t You Won :)\n")
                break
            elif ai_score > user_score and ai_score <= 21:
                print("\n\n\t AI Won :(\n")
                break
            else:
                print("\n\n\t Bust ;)\n")
                
        proceed = input("\nDo you want to continue? (Y/N): ")
        if proceed == "n":
            exit()
        else:
            play_blackjack()
    
    except KeyboardInterrupt:
        print("\n\n\t Operation cancelled by user :( \n".title())
    except ValueError:
        print("\n\n\t Please Enter the values carefully ;( \n".title())


if __name__ == "__main__":
    play_blackjack()
