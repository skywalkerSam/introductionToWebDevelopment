"""
Developer: @skywalkerSam
Purpose: Caesar Cipher Encryption Program...
Date: 12022.10.01.15:08:00
"""

print("""
 _____                               _____ _       _
/  __ \                             /  __ (_)     | |
| /  \/ __ _  ___  ___  __ _ _ __   | /  \/_ _ __ | |__   ___ _ __
| |    / _` |/ _ \/ __|/ _` | '__|  | |   | | '_ \| '_ \ / _ \ '__|
| \__/\ (_| |  __/\__ \ (_| | |     | \__/\ | |_) | | | |  __/ |
 \____/\__,_|\___||___/\__,_|_|      \____/_| .__/|_| |_|\___|_|
                                            | |
                                            |_|
 _____                            _   _
|  ___|                          | | (_)
| |__ _ __   ___ _ __ _   _ _ __ | |_ _  ___  _ __
|  __| '_ \ / __| '__| | | | '_ \| __| |/ _ \| '_  |
| |__| | | | (__| |  | |_| | |_) | |_| | (_) | | | |
\____/_| |_|\___|_|   \__, | .__/ \__|_|\___/|_| |_|
                       __/ | |
                      |___/|_|

""")

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

while True:
    encrypted_text = []
    def encrypt(plain_text, shift_amount):
        for letter in plain_text:
            if letter in alphabet:
                shift_by = alphabet.index(letter) + shift_amount
                if shift_by >= 26:
                    new_shift = shift_by - 26
                    letter = alphabet[new_shift]
                    encrypted_text.append(letter)
                else:
                    letter = alphabet[shift_by]
                    encrypted_text.append(letter)
            else:
                encrypted_text.append(letter)
        print(f'{"".join(encrypted_text)}')


    decrypted_text = []
    def decrypt(encrypted_text, secret_shift):
        for letter in encrypted_text:
            if letter in alphabet:
                shift_by = alphabet.index(letter) - secret_shift
                if shift_by <= 0:
                    new_shift = 0 + shift_by
                    letter = alphabet[new_shift]
                    decrypted_text.append(letter)
                else:
                    letter = alphabet[shift_by]
                    decrypted_text.append(letter)
            else:
                decrypted_text.append(letter)
        print(f'{"".join(decrypted_text)}')

    try:
        direction = input("\nEncode or Decode (E or D): ").lower()
        text = input("\nEnter your message: ").lower()
        shift = int(input("\nEnter the shift pattern: "))
        if direction == "e":
            encrypt(plain_text = text, shift_amount = shift)
            proceed = input("\nDo you want to continue? (Y or N): ").lower()
            if proceed == "y":
                continue
            elif proceed == 'n':
                break
        elif direction == "d":
            decrypt(encrypted_text = text, secret_shift = shift)
            proceed = input("\nDo you want to continue? (Y or N): ").lower()
            if proceed == "y":
                continue
            elif proceed == 'n':
                break
        else:
            print("\n\t Please select a valid option (Encode or Decode) & Try Again ! \n")
            continue

    except KeyboardInterrupt:
        print("\n\t Operation cancelled by user :( \n")
        break
    except IndexError:
        print("\n\tIt's Caesar Cipher. The shift works (1 to 25) only !!!\n")
        continue
    except Exception as e:
        print(e)
