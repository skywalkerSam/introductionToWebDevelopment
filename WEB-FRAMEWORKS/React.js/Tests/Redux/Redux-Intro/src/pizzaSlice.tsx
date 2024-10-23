import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["pepperoni"],
  gluten: true,
  size: "M",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
  },
});

export default pizzaSlice.reducer;
export const { toggleGluten, addTopping } = pizzaSlice.actions;
