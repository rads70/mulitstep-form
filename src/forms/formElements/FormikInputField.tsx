import { InputHTMLAttributes, ReactElement } from "react";
import { Field, ErrorMessage } from "formik";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

function FormikInputField({
  name,
  label,
  type = "text",
  ...rest
}: Props): ReactElement {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col">
        <Field
          name={name}
          type={type}
          {...rest}
          className="border-2 border-slate-200 px-2 py-1 rounded-md"
        />
        <span className="text-red-500">
          <ErrorMessage name={name} />
        </span>
      </div>
    </>
  );
}

export default FormikInputField;
