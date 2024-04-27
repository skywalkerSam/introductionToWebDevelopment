
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



# NOTES:
- Keep it **Simple**, don't over-engineer things unnecessarily!
- Uni-directional data flow, **Parent to child** only, not vice-versa!
- Everytime the state changes, the component **re-renders**.
- **Prop drilling** isn't good in long-term but if you have to, `useContext()`
- Keep it minimal, too much data can lead to **performance issues**!
  

`NOTE`: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (**JavaScript Expression**)


#

## Until next time...

# ;)
