the_scope = 10      # Global Scope


def scope_test():
    """ Shocasing the different scopes in Python"""
    the_scope = 20      # Local Scope
    return the_scope


print(scope_test())
print(the_scope)
print(scope_test.__doc__)
