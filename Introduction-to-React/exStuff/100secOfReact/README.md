# ⚛️ [100sec Of React](https://fireship.io/courses/react/basics-react)

Built with [Vite](https://vitejs.dev/guide/)

## [React Ecosystem](https://github.com/enaqx/awesome-react)
- Static Site: [Gatsby](https://www.gatsbyjs.com/)
- Server-side Rendering: [NEXT.js](https://nextjs.org/)
- Animation: [react-spring](https://www.react-spring.dev/)
- Forms: [FORMIK](https://formik.org/)
- State Management: [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/README.html), [RECOil](https://recoiljs.org), [XState](https://xstate.js.org/)
&, More...



# [💀 Anatomy of React](https://fireship.io/courses/react/basics-anatomy/)

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



# 🗃️ Components
How does a **component-based architecture** for building UIs actually work?

- `JSX`: JavaScript XML, a JS friendly version of HTML.
    - Use `{}` for JS expressions inside JSX.
- Define Components with **JSX**
- Share Data with **Props**
- **Virtual DOM** and React Fiber
- Install **React Dev Tools**!

## Define Components with JSX
Now in your code, define a component by declaring a JavaScript function. It can use the function keyword, or be a function expression if you prefer. It’s return value is the UI represented in a JavaScript friendly version of HTML called JSX. It typically starts with parentheses, followed by exactly one parent element, or an empty element called a fragment, followed by some HTML. But it’s no ordinary HTML - it can also run JavaScript allowing you to include dynamic values from your code using braces. Once a component is defined it can be declared or used in other parts of the UI similar to other HTML elements.

```javascript
function MyComponent() {
  return <p>🔥 Hello!</p>;
}

<MyComponent />
```

## Share Data with Props
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

## Virtual DOM and React Fiber
What makes React so powerful, is that when this data changes the library knows how to efficiently rerend any each component using an internal mechanism called the Virtual DOM and more recently React Fiber. You don’t need to know much about VDOM or Fiber to use React, but it is important to be aware that it’s the magic that reconciles your react code with the real DOM in the browser at runtime. It you want to go further down this rabbit hole, check out the official documentation.



# 🔀 Conditional Rendering
Conditional rendering is a very common pattern where you render a component based on a boolean condition. There are several ways to implement conditional rendering in React.

## 1. If Else
```javascript
function Conditional({ count }) {

  if (count > 5) {
    return <h1>Count is greater than 5</h1>;
  } else {
    return <h1>Count is less than 5</h1>;
  }
}
```

## 2. Ternary `? :`
```javascript
{count % 2 === 0 ? <h1>Count is even</h1> : <h1>Count is odd</h1> }
```

## 3. Logical And `&&`
```javascript
{count && 2 === 0 ? <h1>Count is even</h1> }
```



# ➰ Loops
How to render a collection of items in JSX

- `.map()` to loop through an array and render a list of components.
- **Key** prop is required for each item in the list.

## Array Map
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



# 💥 Events
How to handle events in JSX

## Events in Vanilla JS
```javascript
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event);
})
```

## Events in React
```javascript
function Events() {

  return <button onClick={(event => console.log(event))}>Click</button>
}
```



# My Experiences...

## As you have seen in this 100sec of React, as you add more n more components, the `App.jsx` gets so fuckin hard to manage. 

- Keep all the components in their own separate files, even in their own separate folders.

## Maintain code readability. Just as life, try to give your code some meaning. At least give 'em a meaningful name ...lol ;)

- Remember when you tried to read it after just 2 days? ...lol ;)







#

## Just Keep Going, Until Next Time...
# ;)

