import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../../Constants/cartConstants';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
        return { ...state };
        // return {
        //   ...state,
        //   cartItems: state.cartItems.map((x) =>
        //     x.product === existItem.product ? item : x
        //   ),
        // };
      } else {
        state.cartItems = [...state.cartItems, item];
        return { ...state };
      }
    case CART_REMOVE_ITEM:
      state.cartItems = state.cartItems.filter((x) => x.product !== payload);
      return { ...state };
    // return {
    //   ...state,
    //   cartItems: state.cartItems.filter((x) => x.product !== payload),
    // };

    default:
      return { ...state };
  }
};
