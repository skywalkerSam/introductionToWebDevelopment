import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTopping, toggleGluten } from "./pizzaSlice";
import "tachyons";
import { useState } from "react";


export default function App() {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  let [toppingCount, setToppingCount] = useState(1);

  return (
    <div>
      <div className="mb3 mt1">
        <h1>Introduction to Redux</h1>
        <p>with React</p>
        <hr />
      </div>

      <div>
        <h2 className="red">Customize your Pizza...</h2>
        {pizza.toppings.map((topping) => (
          <div key={topping}>
            <p className="greenyellow">
              {topping} x{toppingCount}
            </p>
          </div>
        ))}
      </div>

      <button onClick={() => dispatch(addTopping("Pepperoni"))}>
        + Pepperoni
      </button>
      <button onClick={() => dispatch(addTopping("Extra Cheese"))}>
        + Extra Cheese
      </button>
      <br />
      {/* <button onClick={()=> dispatch(toggleGluten())}>Toggle Gluten</button> */}
    </div>
  );
}
