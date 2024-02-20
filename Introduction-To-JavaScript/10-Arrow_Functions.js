// Arrow Functions (Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

const materials = [
    'Oxygen',
    'Nitrogen',
    'Hydrogen',
    'Carbon',
  ];
  
console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]

const life = (x) => {
  return console.log(x);
}

life(materials)


const karma = [
  'Love',
  'Hate',
  'Rage',
  'Hurt',
  'Just Feelings...'
]

function fuckThisLife(shit){
  return console.log(shit)
}

fuckThisLife('An Odinary Human: ' + karma)
