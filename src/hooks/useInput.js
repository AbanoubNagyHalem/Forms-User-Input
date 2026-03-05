import { useState } from "react";

export const useInput = (defaultValue, validationFn) => {
  const [enteredValued, setEnteredValued] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValued);

  const handleInputChange = (event) => {
    setEnteredValued(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = (identifier) => {
    setDidEdit(true);
  };

  return {
    value: enteredValued,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
};
