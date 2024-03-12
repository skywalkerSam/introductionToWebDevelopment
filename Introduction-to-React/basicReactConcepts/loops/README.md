
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


# Takeaways
`Tip`: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (`JavaScript Expression`)

#

## Until next time...

# ;)
