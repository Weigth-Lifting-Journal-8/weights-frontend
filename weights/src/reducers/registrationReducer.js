import { IS_REGISTERING, REGISTER_SUCCESS, REGISTER_ERROR } from "../actions";

const initialState = {
  isRegistrationLoading: false,
  isRegistered: false,
  error: ""
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_REGISTERING:
      return {
        ...state,
        isRegistrationLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistrationLoading: false,
        isRegistered: true
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isRegistrationLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
