import React from "react";
import "./myInput.css";

type InputProps = {
  label: string;
  name: string;
  type: string;
};

export function MyInput({
  label,
  name,
  type = "text",

  ...args
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...args} />
    </div>
  );
}
