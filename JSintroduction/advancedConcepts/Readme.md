# Advanced JavaScript Concepts with [Fireship.io](https://fireship.io)

- 102

## [🔗 Prototype Chain](https://fireship.io/courses/js/102-prototype-chain/)

Except for primitives, everything in JavaScript is an Object.

- Inheritance between JavaScript Objects

- `{ }`

- `new Object()`

- `.__proto__`

- `Object.setPrototypeOf()`

- `Object.getPrototypeOf()`

## [🍳 Object destructuring](https://fireship.io/courses/js/102-destructuring/)

- DRY code

```javascript
const { name, dna, origin, activate } = starboyObject;
```


## [👫 ...Spread Operator](https://fireship.io/courses/js/102-spread/)

- `...`

```javascript
const life = [...idk, ...fml]
```

`Note:` where you import objects matter, it will overwrite the previous values!

## [⛓ Optional Chaining (`?`)](https://fireship.io/courses/js/102-optional-chaining/)

**error handling* while calling/assigning an object's property that may or may not exist yet...

```javascript
const starboy = homoSapien?.name;
```

## [🦺 Nullish Coalescing (`??`)](https://fireship.io/courses/js/102-nullish-coalescing/)

- JS is a weakly typed language, so `types` behave a little different than in other languages...

- **Type Coercion**

```javascript
let reasonsToLive = moments ?? 'None';
```

`Note:` While using `??`, only `null` and `undefined` are considered as **falsy**!

## [🔱 Higher Order Functions ( HOF )](https://fireship.io/courses/js/102-higher-order-functions/)

- A **function** is just an **object** in *JavaScript*, so we can pass functions around like any other object. (*Yeah*! just like a thoughtless child wandering throughout the garden, doin' whatev tf, just living life to its fullest... ;)

### Function Declaration

- *Hoisted*, use anywhere in a file.

- *Global Scope* (*Convention)

```javascript
function add(x, y) {
    return x + y;
}
```

### Function Expression

- *Ain't created until encountered* in the code.

- Can be *named or anonymous*.

- Can be *assigned to a variable* or *passed as an argument* to another function.

- *Local Scope* (*Convention)

#### Function Expression, Named

```javascript
const addFunc = function sum(x, y) {
    return x + y;
}
```

#### Function Expression, Anonymous

```javascript
const fuckFunc = function(x, y) {
    return x * y;
}
```

### Arrow Function

- *goCrazy, do whatever tf you want...

- Good for quick, short functions.

- `=>` / `() =>`

```javascript
someFunc(value => console.log(value))
```

- `() => {}`

```javascript
const subtract = (x, y) => {
    return x - y;
}
```

### HOF

A **higher order function** is a function that takes a function as an argument, or *returns a function*. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.

- **Callback***s*

```javascript
// a function that takes a function as an argument...
function hofExample(x, y, func) {
    return func(x, y);
}
```

`Note:` It's damn simple, but the way it's used in *different ways* throughout the language is just... ***brain-fuck!**

`Personal Note:` *JavaScript* is fucked, and i love it ;)

## [🥡 Closures ( notThatOne! )](https://fireship.io/courses/js/102-closures/)


