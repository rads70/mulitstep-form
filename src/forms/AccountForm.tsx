import { FormWrapper } from "./FormWrapper";

import FormikInputField from "./formElements/FormikInputField";

export default function AccountForm() {
  return (
    <FormWrapper title="Account">
      <FormikInputField label="Email" name="email" />
      <FormikInputField label="Password" name="password" type="password" />
    </FormWrapper>
  );
}
