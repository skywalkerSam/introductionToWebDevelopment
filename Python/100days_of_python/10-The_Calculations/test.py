

def func_one(first_name, last_name):
    updated_first_name = first_name.title()
    updated_last_name = last_name.title()
    return f"This is {updated_first_name} {updated_last_name}..."


print(func_one("STArBOY", "sAM"))


def outer_function(a, b):
    def inner_function(c, d):
        return c + d
    return inner_function(a, b)
 
result = outer_function(5, 10)
print(result)
