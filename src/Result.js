import React, { useState } from 'react';
import './Result/result.css';

const Result = (props) => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState();

  const handler = (val, val2) => {
    // event.preventDefault();
    let a = val;
    let b = val2;
    setValue(a);
    setValue2(b);
  };

  return (
    <div className={value ? "result" : value}>
      <h1>Result</h1>
      <button onClick={() => handler(props.name, props.password)} type="submit">
        Submit
      </button>

      <p>{value}</p>
      <p>{value2}</p>
    </div>
  );
};

export default Result;
