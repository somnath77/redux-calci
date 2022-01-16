import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

const CalciComponent = (props) => {
  const {
    a,
    b,
    result,
    seta,
    setb,
    add,
    subtract,
    multiply,
    divide,
    resetData,
  } = props;

  return (
    <table className='calculator' >
      <label className='label'>Calculator</label>
      <tr>
        <td colSpan='5'>
          <input
            className='display-box'
            type='text'
            placeholder='Enter A'
            id='a'
            onChange={seta}
            value={a}
          />
        </td>
      </tr>
      <tr>
        <td colSpan='5'>
          <input
            className='display-box'
            type='text'
            placeholder='Enter B'
            id='b'
            onChange={setb}
            value={b}
          />
        </td>
      </tr>
      <tr>
        <td> <input className='button' type='button' value='+' onClick={add} /> </td>
        <td> <input className='button' type='button' value='-' onClick={subtract} /> </td>
        <td> <input className='button' type='button' value='*' onClick={multiply} /> </td>
        <td> <input className='button' type='button' value='/' onClick={divide} /> </td>
        <td> <input className='button' type='button' value='Reset' onClick={resetData} /> </td>
      </tr>
      <tr>
        <td colSpan='5'>
          <input
            className='display-box'
            type='text'
            id='result'
            placeholder='Result will be shown here'
            value={result}
            disabled
          />
        </td>
      </tr>
    </table>
  );
};

CalciComponent.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  result: PropTypes.string.isRequired,
  seta: PropTypes.func.isRequired,
  setb: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  multiply: PropTypes.func.isRequired,
  divide: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
  handleOnChangeA: PropTypes.func.isRequired,
  handleOnChangeB: PropTypes.func.isRequired,
};

export default CalciComponent;
