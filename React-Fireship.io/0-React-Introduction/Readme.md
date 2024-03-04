# ⚛️`React in 100 Seconds`: **100sec** Of React
What is React.js?


## [💀 Anatomy of React](https://fireship.io/courses/react/basics-anatomy/)
What are all the files in a React project?

- `package.json`: The main file that defines the **dependencies and other settings** for your project.
- `node_modules`: Source code for dependencies. Do not touch.
- `public`: The directory where your **Static Files** are stored.
- `src/index.js`: Main entrypoint to bootstrap the app.
- `src/App.js`: The root component of the app.
- `src/App.spec.js`: Unit tests for the app.
- `src/*.css`: Styles for the app.
  
`NOTE`:  Only export **one** component per file...!


# 🗃️ Components
How does a **component-based architecture** for building UIs actually work?

- `JSX`: JavaScript XML, a JS friendly version of HTML.
- Define Components with **JSX**
- Share Data with **Props**
- **Virtual DOM** and React Fiber
- Install **React Dev Tools**!


# 🔀 Conditional Rendering
How to render a component based on a boolean condition

- Use `{}` for **JavaScript** expressions inside JSX.
  
## Options to choose from...

1. **If Else**
2. **Ternary** `? :`
3. **And** `&&`



# ➰ Loops
How to render a collection of items in JSX

- `.map()` to loop through an array and render a list of components.

- **Key** prop is required for each item in the list.



# 💥 Events
How to handle events in JSX

## Vanilla JS Events
```javascript
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event);
})
```

## React Synthetic Events
```javascript
function Events() {

  return <button onClick={(event => console.log(event))}>Click</button>
}
```


# 🔄 State
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


## Basic Usage: useState()

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

- Do not do **prop drilling**. If you have to, `useContext()`
- Too much data can cause **performance issues**...!

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


















- [ ] Done

#

## Until next time...

# ;)
