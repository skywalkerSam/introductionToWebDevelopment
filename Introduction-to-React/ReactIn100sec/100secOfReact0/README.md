[//]: # (100secOfReact-0)
# 🔄 [States In React](https://fireship.io/courses/react/basics-state/)
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


## Basic Usage: `useState()`

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

## Updating objects with useState()
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



# 🌱 Lifecycle and Effects
Working with the **useEffect** hook

## Lifecycle with Class Components
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

## Lifecycle with useEffect()
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



# 🌲 Context
Working with the React Context API

- **prop drilling** isn't good. If you have to, `useContext()`
- Too much data can lead to **performance issues** in your application...!

## Example of Prop Drilling
```javascript
function PropDrilling() {

  const [count] = useState(0);

  return <Child count={count} />
}

function Child({ count }) {
  return <GrandChild count={count} />
}

function GrandChild({ count }) {
  return <div>{count}</div>
}
```

## Define context
```javascript
const CountContext = createContext();
```

## Sharing Data with Context
```javascript
function PropDrilling() {

  const [count] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Child />
    </CountContext.Provider>
  )
}

function Child() {
  return <GrandChild />
}

function GrandChild() {

  const count = useContext(CountContext);

  return <div>{count}</div>
}
```


## Just Keep Going, Until Next Time...

# ;)
