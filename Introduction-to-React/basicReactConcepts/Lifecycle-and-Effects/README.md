
# 🌱 [Lifecycle and Effects](https://fireship.io/courses/react/basics-lifecycle/)
Working with the **useEffect()** hook

# Lifecycle with Class Components
```javascript
class Lifecycle extends React.Component {
  
  componentDidMount() {
    // Initialize
  }

  componentDidUpdate() {
    // Updated
  }

  componentWillUnmount() {
    // Removed
  }
}
```

# Lifecycle with useEffect()
`useEffect()` is a React hook that can be used only inside **functional components**

```javascript
function Lifecycle() {

  const [count] = useState(0);

  useEffect(() => {
    
    console.log('count updated!')

    return () => console.log('destroyed!')

  }, [count]);

}
```



# Challenge!
Implement a `CountdownTimer` component that implements `useState()` and `useEffect()` in conjunction with `setInterval()` to handle the timer. Make sure you use the `useEffect()` hook to call `clearTimeout()` when the component is destroyed.


# Takeaways...

- Keep it **simple**, DON'T try to overcomplicate things unnecessarily!
  

`NOTE`: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (**JavaScript Expression**)


#

## Until next time...

# ;)
