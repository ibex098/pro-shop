import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from '../../Constants/addOrderConstants';

export const orderCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: payload };

    case ORDER_CREATE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  { type, payload }
) => {
  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: payload };

    case ORDER_DETAILS_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
