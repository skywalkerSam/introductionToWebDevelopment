# A Good Code is measured by the number of calculations when it scales...

from time import time

# Create a large list of superhero names
list1 = ['nemo', 'bruce', 'tony', 'thor', 'sam', 'thanos', 'dr. strange', 'black widow', 'captain america', 'falcon', 'nick fury', 'nemo', 'drax', 'star lord', 'gamora', 'rocket', 'groot', 'iron man', 'nemo', 'elon musk', 'starboy', 'deadpool', 'spider man', 'batman', 'spider girl', 'hulk', 'cyborg', 'wolverine', 'black penther', 'luke skywalker', 'jedi', 'finn', 'poe', 'rey skywalker', 'leia skywalker', 'darth vader', 'darth moul', 'han solo', 'chewie', 'millenium falcon', 'storm troopers', 'nemo', 'aquaman', 'flash', 'superman', 'supergirl', 'gwen', 'star wars', 'star trek', 'tron', 'starship', 'starcraft', 'starboy', 'stargirl' ]



def find_nemo(list):
    t1 = time()
    for i in list:
        if i == 'nemo':
            print('Found NEMO!')
        else:
            print('Found something else')
    t2 = time()
    print(f"Took:  {t2 - t1} MilliSec.")


find_nemo(list1)



