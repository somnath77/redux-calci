import { CALCI_ACTIONS } from '../actionsConstants/calciActionConstants';
const { SET_A, SET_B, GET_ADDITION,
  GET_DIVISION, GET_MULTIPLICATION,
  GET_SUBTRACTION, RESET_STATE } = CALCI_ACTIONS;

export const setA = (payload) => {
  return {
    type: SET_A,
    payload: payload,
  }
};

export const setB = (payload) => {
  return {
    type: SET_B,
    payload: payload,
  }
};

export const getAddition = () => {
  return {
    type: GET_ADDITION,
  }
};

export const getSubtraction = () => {
  return {
    type: GET_SUBTRACTION,
  }
};

export const getMultiplication = () => {
  return {
    type: GET_MULTIPLICATION,
  }
};

export const getDivision = () => {
  return {
    type: GET_DIVISION,
  }
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  }
};
