from prettytable import PrettyTable

x = PrettyTable()
x.field_names = ["Pokemon", "Type", "Generation"]
x.add_rows(
    [
        ["Pikachu", "Electric", 1],
        ["Charmander", "Fire", 1],
        ['Mewtwo', 'Phychic', 1],
        ['Bulbasaur', 'Grass/Poison', 1],
        ['Squirtle', 'Water', 1]
    ]
)

x.align = 'c'
print(x)
