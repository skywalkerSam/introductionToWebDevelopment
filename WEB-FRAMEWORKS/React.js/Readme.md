# [REACT - THE FULL COURSE](https://fireship.io/courses/react/)
A JavaScript Library for Building UIs. (`Facebook, 2013`)



# ⚛️ [100sec Of React](https://fireship.io/courses/react/basics-react)
- [React](https://github.com/facebook/react) ( [react.dev](https://react.dev/))
- [React Native](https://github.com/facebook/react-native)


# [React Ecosystem](https://github.com/enaqx/awesome-react)
- Static Site: [Gatsby](https://www.gatsbyjs.com/)
- Server-side Rendering: [NEXT.js](https://nextjs.org/)
- Animation: [react-spring](https://www.react-spring.dev/)
- Forms: [FORMIK](https://formik.org/)
- State Management: [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/README.html), [RECOil](https://recoiljs.org), [XState](https://xstate.js.org/)
&, More...


## A basic `React Component`

```javascript
function App(){
    return <h1>Hello World!</h1>
}

export default App
```


# 💀 Anatomy of React

![The React Way](./Resources/Memes/the-react-way.webp)

## React Build Tools
There are many ways to build a React app, Here's some common ones...

- [Vite](https://vitejs.dev/guide/)
- [Next.js](https://nextjs.org/docs/getting-started/installation)
- [Gatsby](https://www.gatsbyjs.com/docs/quick-start/)
- [Create React App](https://create-react-app.dev/docs/getting-started)

```shell
npx create-react-app my-app
```


## React Files
Get familiar with the files in your React project.

- `package.json`: The main file that defines the **dependencies and other settings** for your project.
- `node_modules`: Source code for dependencies. Do not touch.
- `public`: The directory where your **Static Files** are stored.
- `src/index.js`: Main entrypoint to bootstrap the app.
- `src/App.js`: The root component of the app.
- `src/App.spec.js`: Unit tests for the app.
- `src/*.css`: Styles for the app.
  
`NOTE`:  Only export **one** component per file...!



# 


# 🗃️ [React Components](https://fireship.io/courses/react/basics-components/)
How does a **component-based architecture** for building UIs actually work?

- `JSX`: JavaScript XML, a JS friendly version of HTML.
    - Use `{}` for JS expressions inside JSX.
- Define Components with **JSX**
- Share Data with **Props**
- **Virtual DOM** and React Fiber
- Install **React Dev Tools**!

# Define Components with JSX
Now in your code, define a component by declaring a JavaScript function. It can use the function keyword, or be a function expression if you prefer. It’s return value is the UI represented in a JavaScript friendly version of HTML called JSX. It typically starts with parentheses, followed by exactly one parent element, or an empty element called a fragment, followed by some HTML. But it’s no ordinary HTML - it can also run JavaScript allowing you to include dynamic values from your code using braces. Once a component is defined it can be declared or used in other parts of the UI similar to other HTML elements.

```javascript
function MyComponent() {
  return <p>🔥 Hello!</p>;
}

<MyComponent />
```

# Share Data with Props
You can pass data into a component with props. Every functional component has a props argument that can accept external data. A prop can be a primitive value like a string or number, and object, or even another React component. Components can pass props from a parent to child, but not vice versa. This means that any state or data that changes is owned by one component, and can only be used by its children. This creates a one-way or unidirectional dataflow that keeps your code modular and predictable.

```javascript
function MyComponent(props) {
  return <p>🔥 {props.name}</p>;
}

<MyComponent name="Jeff" />


// Or use desctruturing to pass props

function MyComponent({ name }) {
  return <p>🔥 {name}</p>;
}

// Use braces to pass an expression

<MyComponent name={`JeffD` + 23} />
```

# Virtual DOM and React Fiber
What makes React so powerful, is that when this data changes the library knows how to efficiently rerend any each component using an internal mechanism called the Virtual DOM and more recently React Fiber. You don’t need to know much about VDOM or Fiber to use React, but it is important to be aware that it’s the magic that reconciles your react code with the real DOM in the browser at runtime. It you want to go further down this rabbit hole, check out the official documentation.


# [Challenge](https://github.com/skywalkerSam/Introduction-To-Web-Development/blob/fireship/Introduction-to-React/basicReactConcepts/reactComponents/src/App.jsx)
Define a set of 2 components - **Card** and **Icon**. the card takes the icon as a prop, then renders custom HTML below it with `props.children` ( **Content Projection** )



#



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



# ➰ [Loops](https://fireship.io/courses/react/basics-loops/)
How to render a collection of items in JSX

- `.map()` to loop through an array and render a list of components.
- **Key** prop is required for each item in the list.

# Array Map
The most common way to loop over a collection of data in React is to use the Array map method. It takes a callback function that gets called on each element to transform the data into UI elements.

```javascript
const data = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
];

function ListOfAnimals() {
  return (
    <ul>
      {data && // Only render if there's data - see 'Conditional Rendering'
        data.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
    </ul>
  );
}
```


# Challenge!
Define an array of animals called data. Use a `.map()` to return a list of all the animals in the data array.



#



# 💥 [Events](https://fireship.io/courses/react/basics-events/)
How to handle events in JSX

# Events in Vanilla JS
```javascript
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event);
})
```

# Events in React
```javascript
function Events() {

  return <button onClick={(event => console.log(event))}>Click</button>
}
```


# Challenge
Implement a text input that updates the input value and logs the event target.



#



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



#



# 🌱 [Lifecycle and Effects](https://fireship.io/courses/react/basics-lifecycle/)
Working with the `useEffect()` hook
- Be careful not to create a **memory leak**/**while loop** when using **useEffect()**.

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

- [Countdown Timer](https://github.com/skywalkerSam/timer)



#



# 🌲 [Context](https://fireship.io/courses/react/basics-context/)
Working with the **React Context API**


# Example of Prop Drilling
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


# Define context
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


# Challenge
Create `CountContext` and `CountProvider` that uses `{ count, setCount }` as its values. This will allow the count and `setCount` function to be passed to any of its `{children}` in the tree. Create 2 components `Count` and `CountButton` that can each call `useContext(CountContext)` to update the count and display the current count value.



#



# 🚨 [Error Boundries](https://fireship.io/courses/react/basics-error-boundry/)
How do Error Boundaries work in React?

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('something went horribly wrong', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Fallback UI</h1>;
    }

    return this.props.children;
  }
}


// Example Usage
function Main() {
  return (
    <Dashboard>
      <ErrorBoundary>
        <Orders />
      </ErrorBoundary>
    </Dashboard>
  );
}

```


# Challenge!
Create an `ErrorBoundary` class component that provides a **fallback UI** in the event an error occurs.


#


# NOTES:
- Keep it **Simple**, don't over-engineer things unnecessarily!
- Uni-directional data flow, **Parent to child** only, not vice-versa!
- Everytime the state changes, the component **re-renders**.
- **Prop drilling** isn't good in long-term but if you have to, `useContext()`
- Keep it minimal, too much data can lead to **performance issues**!
  

`NOTE`: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (**JavaScript Expression**)



#



# Life goes on...
![It's time to learn a new JS Framework lol](./Resources/Memes/hold-my-beer.webp)



#

## Until next time...

# ;)
- [X] Done
