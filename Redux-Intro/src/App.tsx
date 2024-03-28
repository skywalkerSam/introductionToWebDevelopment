import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTopping } from "./pizzaSlice";

export default function App() {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mb3 mt1">
        <h1>Introduction to Redux</h1>
        <p>with React</p>
        <hr />
      </div>

      <div>
        <h2>Pizza Demo</h2>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </div>

      <button onClick={() => dispatch(addTopping("Pepperoni"))}>
        Add Pepperoni
      </button>
    </div>
  );
}
