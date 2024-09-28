
# 🔄 [React State](https://fireship.io/courses/react/basics-state/)
Working with the useState hook

There are multiple ways to manage states, keep it simple, and don't use **third-party state management** libraries like Redux, MobX, or Recoil unless you absolutely have to...!

- **useState()** Hook
    - `const [state, setState] = useState(initialState);`
        - `state`: The current state.
        - `setState`: A function() that updates the state.
  
- **State** is how you update the data/values over time.
    - Uni-directional data flow...
    - Every time a state changes, the component **re-renders**.
    - When you assign a new value, the old value is fucked.
        - So, in order to save the old value from getting fucked, use `...keepPreviousState`, it merges with the old value.
    
- **Props** are how you share data between components, and are immutable by default.

- **Hook** is a function() that can be called on top level of your component to use different features of your framework i.e. React.


# Basic Usage: `useState()`

```javascript
function Stateful() {

  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      setPrevCount(prev);
      setCount(count + 1);
    });
  };

  return (
    <>
      <h3>Current count: {count}</h3>
      <h3>Previous count: {prevCount}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
```


# Updating objects with useState()
```javascript
function Stateful() {
  const [state, setState] = useState({ count: 0, user: 'Bob' });

  const handleClick = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };

  return (
    <>
      <h3>Count: {state.count}</h3>
      <h3>User: {state.user}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
```


# Challenge!
Implement a **handleClick()** function to handle state using `useState()`.


# Takeaways...

- Keep it **simple**, DON'T try to overcomplicate things unnecessarily!
  

**NOTE**: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (`JavaScript Expression`)


#

## Until next time...

# ;)
