
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



# Takeaways

- Make it **simple**, NEVER overcomplicate things!
  

**NOTE**: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (`JavaScript Expression`)


#

## Until next time...

# ;)
