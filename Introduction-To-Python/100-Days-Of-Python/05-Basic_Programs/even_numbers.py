# Whole Numbers
whole_total = 0
for w in range(1, 101):
    whole_total += w

print(f"\n\t Sum of Whole Numbers upto 100: {whole_total}\n")

# Even Numbers
even_total = 0
for e in range(0, 101, 2):
    even_total += e

print(f"\n\t Sum of all Even Numbers upto 100: {even_total}\n")

# Odd Numbers
odd_total = 0
for o in range(1, 100, 2):
    odd_total += o

print(f"\n\t Sum of all Odd Numbers upto 100: {odd_total}\n")
