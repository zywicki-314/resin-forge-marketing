import { useState } from "react";

const useInput = (validateValueFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);

  const isValueValid = validateValueFunc(enteredValue);

  const isInputValid = !isValueValid && wasInputTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputLostFocusHandler = () => {
    setWasInputTouched(true);
  };

  const resetValues = () => {
    setEnteredValue("");
    setWasInputTouched("");
  };

  return {
    value: enteredValue,
    hasError: isInputValid,
    isValid: isValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};

export default useInput;
