import { FruitList } from './FruitList.js'
import { ShoppingList } from './ShoppingList.js';


export default function App() {
  return(
    <div style={{margin:'5%'}}>
      <FruitList></FruitList>
      <ShoppingList></ShoppingList>
    </div>
  );
}