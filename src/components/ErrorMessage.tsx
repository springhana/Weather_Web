import React from "react";
import { useRef, useEffect } from "react";
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const errorText: any = useRef();
  console.log(message);
  useEffect(() => {
    if (message) {
      errorText.current.style.display = "block";
    }
  });
  return (
    <div className="error" ref={errorText}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
