import { CALCI_ACTIONS } from '../actionsConstants/calciActionConstants';
const { SET_A, SET_B, GET_ADDITION,
  GET_DIVISION, GET_MULTIPLICATION,
  GET_SUBTRACTION, RESET_STATE } = CALCI_ACTIONS;

const initialState = {
  a: 0,
  b: 0,
  result: 0,
};

const calciReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_A:
      return {
        ...state,
        a: payload,
      };
    case SET_B:
      return {
        ...state,
        b: payload,
      };
    case GET_ADDITION:
      console.log('state', state.a, typeof (state.a));
      return {
        ...state,
        result: parseInt(state.a) + parseInt(state.b),
      };
    case GET_SUBTRACTION:
      return {
        ...state,
        result: state.a - state.b,
      };
    case GET_MULTIPLICATION:
      return {
        ...state,
        result: state.a * state.b,
      };
    case GET_DIVISION:
      return {
        ...state,
        result: (state.b !== 0) ? (state.a / state.b) : 'Invalid',
      };
    case RESET_STATE:
      return {
        ...state,
        result: 0,
        a: 0,
        b: 0,
      };
    default:
      return { ...initialState };
  }
};

export default calciReducer;
