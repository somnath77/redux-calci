import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA, setB, getAddition,
  getDivision, getMultiplication,
  resetState, getSubtraction,
} from '../actions/calciActions';
import CalciComponent from '../components/calciComponent';

const CalciContainer = () => {
  const dispatch = useDispatch();
  const { a, b, result } = useSelector((state) => state.calciReducer);

  const seta = (e) => {
    dispatch(setA(e.target.value));
  };

  const setb = (e) => {
    dispatch(setB(e.target.value));
  };
  const add = () => {
    dispatch(getAddition());
  };
  const subtract = () => {
    dispatch(getSubtraction());
  };
  const multiply = () => {
    dispatch(getMultiplication());
  };
  const divide = () => {
    dispatch(getDivision());
  };
  const resetData = () => {
    dispatch(resetState());
  };

  return (
    <CalciComponent
      a={a}
      b={b}
      result={result}
      seta={seta}
      setb={setb}
      add={add}
      subtract={subtract}
      multiply={multiply}
      divide={divide}
      resetData={resetData}
    />
  );
}

export default CalciContainer;
