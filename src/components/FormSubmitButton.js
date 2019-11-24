import React from 'react';

function FormInputButton(props) {
  let buttonType = props.type;
  let buttonModifierClassName = "";

  if (buttonType) {
    buttonType = `${buttonType[0].toUpperCase()}${buttonType.slice(1)}`; // capitalize
    buttonModifierClassName = `dynamicForm__button--is${buttonType}`;
  }

  return (
    <button
      className={`dynamicForm__button ${buttonModifierClassName}`}
      onClick={props.click}
    >
      {props.innerHtml}
    </button>
  );
}

export default FormInputButton;