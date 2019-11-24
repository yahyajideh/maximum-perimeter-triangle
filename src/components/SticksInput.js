import React from 'react';
 
function SticksInput(props) {
  return (
    <div className="dynamicForm__item">
      <input
        className="dynamicForm__itemInput"
        type="text"
        value={props.value}
        onChange={props.inputChange}
      />
      <button
        className="dynamicForm__itemButton"
        type="button"
        onClick={props.buttonClick}
        disabled={props.buttonDisabled}
        tabIndex="-1"
      />
    </div>
  );
}

export default SticksInput;