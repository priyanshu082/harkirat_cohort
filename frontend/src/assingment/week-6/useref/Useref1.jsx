/**
 * A React component that demonstrates the use of the `useState` hook
 * to manage the state of an input field and a button to focus on the input field.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import Useref1 from './Useref1';
 *
 * ReactDOM.render(<Useref1 />, document.getElementById('root'));
 * ```
 *
 * @returns {React.ReactElement} A React element that renders an input field and a button.
 */
import React, { useRef, useState } from 'react';

const Useref1 = () => {
  /**
   * State variable to store the input value, initialized to an empty string.
   */
  const [input, setInput] = useState("");
  const focus=useRef();

  /**
   * Handles the button click event to focus on the input field.
   */
  const handleFocus = () => {
   
    // const inputBox = document.getElementById('inputBox');

     //we can do this by react also

     focus.current.focus();
     

    inputBox.focus();
  };

  return (
    <div>
      <input type='string' id='inputBox' ref={focus}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Useref1;