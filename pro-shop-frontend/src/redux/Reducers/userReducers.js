import {
  USER_LOGIN_FAIL,
  USER_LOGIN_OUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../../Constants/userConstants';

const initialState = {};

export const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };

    case USER_LOGIN_OUT:
      return {};

    default:
      return state;
  }
};
