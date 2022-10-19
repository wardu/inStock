import { useState } from "react";

const Input = (props) => {
  const [showError, setShowError] = useState(false);

  return (
    <>
      <label htmlFor={props.name} className="form__label">
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        id={props.name}
        className="form__input"
        placeholder={props.label}
      />
    </>
  );
};

export default Input;
