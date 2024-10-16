
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

## Until next time...

# ;)
