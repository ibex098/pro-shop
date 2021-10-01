import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../../Constants/productConstants';

const initialState = {
  loading: true,
  error: '',
  products: [],
  product: {
    reviews: [],
  },
};

// export const productListReducer = (
//   state = { products: [] },
//   { type, payload }
// ) => {
//   switch (type) {
//     case PRODUCT_LIST_REQUEST:
//       return { loading: true, products: [] };

//     case PRODUCT_LIST_SUCCESS:
//       return { loading: false, products: payload };

//     case PRODUCT_LIST_FAIL:
//       return { loading: false, error: payload };

//     default:
//       return state;
//   }
// };

export const productListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      state.products = [];
      return { ...state };

    case PRODUCT_LIST_SUCCESS:
      state.loading = false;
      state.products = payload;
      return { ...state };

    case PRODUCT_LIST_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      state.loading = true;
      return { ...state };

    case PRODUCT_DETAILS_SUCCESS:
      state.loading = false;
      state.product = payload;
      return { ...state };

    case PRODUCT_DETAILS_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};
