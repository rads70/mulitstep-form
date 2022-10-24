import { FormWrapper } from "./FormWrapper";
import { Field } from "formik";
import FormikInputField from "./formElements/FormikInputField";

export default function UserForm() {
  return (
    <FormWrapper title="User details">
      <FormikInputField name="firstName" label="First Name" />
      <label htmlFor="lastName">Last Name</label>
      <Field
        type="text"
        required
        name="lastName"
        className="border-2 border-slate-200 px-2 py-1 rounded-md"
      />
      <label htmlFor="age">Age</label>
      <Field
        type="number"
        required
        name="age"
        className="border-2 border-slate-200 px-2 py-1 rounded-md"
      />
    </FormWrapper>
  );
}
