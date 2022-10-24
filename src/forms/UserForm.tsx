import { FormWrapper } from "./FormWrapper";

import FormikInputField from "./formElements/FormikInputField";

export default function UserForm() {
  return (
    <FormWrapper title="User details">
      <FormikInputField label="First Name" name="firstName" />
      <FormikInputField label="Last Name" name="lastName" />
      <FormikInputField label="Age" name="age" type="number" />
    </FormWrapper>
  );
}
