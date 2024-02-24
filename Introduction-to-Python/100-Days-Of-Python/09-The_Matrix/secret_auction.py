from replit import clear
logo = '''
                         ___________
                         \         /
                          )_______(
                          |"""""""|_.-._,.---------.,_.-._
                          |       | | |               | | ''-.
                          |       |_| |_             _| |_..-'
                          |_______| '-' `'---------'` '-'
                          )"""""""(
                         /_________\\
                       .-------------.
                      /_______________\\

'''
print(logo)


bidding_database = {}
while True:
    user_name = input("Enter your name: ")
    user_bid = int(input("\nEnter your bid: $"))
    bidding_database[user_name] = user_bid

    proceed = input("\nMore users? (Y or N): ").lower()
    if proceed == 'n':
        clear()
        all_bids = []
        for bid in bidding_database:
            all_bids.append(bidding_database[bid])

        max_bid = max(all_bids)

        for name, bid in bidding_database.items():
            if bid == max_bid:
                auction_winner = name
        print(f"\n\n\t This auction goes for ${max_bid} to '{auction_winner}'...\n")
        break
    elif proceed == 'y':
        clear()
        continue
