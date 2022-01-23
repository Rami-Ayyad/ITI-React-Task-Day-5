export default function ProductsReducer(state = [], action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    default:
      return state;
  }
}
