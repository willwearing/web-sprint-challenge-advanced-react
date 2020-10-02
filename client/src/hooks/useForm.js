import { useState } from "react";

export const useForm = (initialValue, succsessBoolean) => {
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(succsessBoolean);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [values, showSuccessMessage, handleChange, handleSubmit];
};
