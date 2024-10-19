import random as rd
import hangman_art as ha
import hangman_words as hw
from replit import clear

print(ha.logo)
word_list = hw.word_list
stages = ha.stages
chosen_word = rd.choice(word_list)
chosen_word_len = len(chosen_word)

# Blank display
print(chosen_word)
display = []
for bar in range(chosen_word_len):
    display.append("_")
print(f"{' '.join(display)}")

end_of_game = False
lives = 6
while not end_of_game:
    user_guess = input("\nGuess a letter: ").lower()
    clear()
    if user_guess in display:
        print(f"\n{user_guess}, You've already tried this one! Try Another One :(")
    for letter in range(chosen_word_len):
        if user_guess == chosen_word[letter]:
            display[letter] = user_guess

    if "_" not in display:
        print("\n\t You've Won :) \n")
        end_of_game = True
        break

    elif user_guess not in chosen_word:
        print(f"\n{user_guess}, doesn't fits! Try Another One :(")
        lives -= 1
        print(f"{stages[lives]}")
        if lives == 0:
            print("\n\t You Lose :( \n")
            print(f"Word: {chosen_word}")
            end_of_game = True
            break
    
    print(f"{' '.join(display)}")

