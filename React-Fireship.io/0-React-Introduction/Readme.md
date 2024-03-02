# `React Introduction`: **100sec** Of React


## [Anatomy of React](https://fireship.io/courses/react/basics-anatomy/)
Only export **one** component per file...!


## Purpose of React Files
- `package.json`: The main file that defines the **dependencies and other settings** for your project.
- `node_modules`: Source code for dependencies. Do not touch.
- `public`: The directory where your **Static Files** are stored.
- `src/index.js`: Main entrypoint to bootstrap the app.
- `src/App.js`: The root component of the app.
- `src/App.spec.js`: Unit tests for the app.
- `src/*.css`: Styles for the app.



## React Components
`JSX`: JavaScript XML, a JS friendly version of HTML.

- **React Dev Tools**!
- Define Components with **JSX**
- Share Data with **Props**
- **Virtual DOM** and React Fiber



## Conditional Rendering
Use `{}` for **JavaScript** expressions inside JSX.

1. **If Else**
2. **Ternary** `? :`
3. **And** `&&`



## Loops
Use `.map()` to loop through an array and render a list of components.

- **Key** prop is required for each item in the list.



# Events

## Vanilla JS Events
```javascript
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event);
})
```

## React Synthetic Events
```python
function Events() {

  return <button onClick={(event => console.log(event))}>Click</button>
}
```







#

## Until next time...
# ;)
