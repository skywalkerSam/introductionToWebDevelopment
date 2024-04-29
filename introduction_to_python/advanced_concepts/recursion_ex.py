# Recursion: Repeative Stuff, Stack Overflow & Limited Memory...


counter = 0
def recursion():
    global counter
    if counter > 10:
        print("Counter is greater than 10...")
    counter += 1
    recursion()

recursion()
