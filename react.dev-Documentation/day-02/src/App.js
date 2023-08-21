// Conditional rendering: Rendering lists!

import { FruitList } from './FruitList.js'
import { ShoppingList } from './ShoppingList.js';


export default function App() {
  return(
    <div>
      <h1>Conditional rendering: Rendering lists!</h1>
      <br></br>
      <hr></hr>
      <h2>Fruit List</h2>
      <FruitList></FruitList>
      <h2>Shopping List</h2>
      <ShoppingList></ShoppingList>
    </div>
  );
}
