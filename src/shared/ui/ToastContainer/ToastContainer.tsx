// ToastContainer.tsx
import React from "react";
import {
  ToastContainer as ReactToastContainer,
  ToastContainerProps,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.pcss";

export const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  return <ReactToastContainer {...props} />;
};
