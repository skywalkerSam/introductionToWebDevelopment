// ...Spread Operator, combine two objects and arrays.
console.log('\n...spreadOperator!\n')

/** Spread Syntax
The spread syntax ... is a relatively new operator that was introduced in ES2018. It provides a concise way to combine objects and arrays.
 */

// combine two objects
const crushes = {
    one: 'ashley',
    two: 'karol',
    three: 'rosalia',
    four: 'elizabeth',
    five: 'olivia',
    six: 'miley',
    seven: 'taylor',
    eight: 'dua',
    nine: 'billie',
}

const newCrushes = {
    ...crushes,    // combine crushes object
    a: 'tris',
    b: 'anya',
    c: 'lyliana',
    d: 'hayley',
    e: 'abigail',
    f: 'sophie',
    // ...crushes,    // where you import matters, it overwrites the existing values!
}

// console.log(crushes)
// console.log(newCrushes)


// combine two arrays
const idk = ['newborn', 'child', 'teen']
const fucked = ['adult', '30s', '40s', 'fuckedAF', 'ceaseToExist...']
const life = [...idk, ...fucked]

console.log(life)
