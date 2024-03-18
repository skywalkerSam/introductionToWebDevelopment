
# 🔀 [Conditional Rendering](https://fireship.io/courses/react/basics-conditional-rendering/)

Conditional rendering is a very common pattern where you render a component based on a boolean condition. There are several ways to implement conditional rendering in React.


# 1. If Else
```javascript
function Conditional({ count }) {

  if (count > 5) {
    return <h1>Count is greater than 5</h1>;
  } else {
    return <h1>Count is less than 5</h1>;
  }
}
```

# 2. Ternary `? :`
```javascript
{count % 2 === 0 ? <h1>Count is even</h1> : <h1>Count is odd</h1> }
```

# 3. Logical And `&&`
```javascript
{count && 2 === 0 ? <h1>Count is even</h1> }
```

# Challenge!
Define a `LoadingButton` component. The button takes loading state, onClick, and label as props then renders the **label** or **loader** depending on the loading state.

`Tip`: This content projection shit is fuckin' awesome ;)


#

## Until next time...

# ;)
