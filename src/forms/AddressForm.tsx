import { FormWrapper } from "./FormWrapper";
import "./form.css";
import FormikInputField from "./formElements/FormikInputField";

export default function AddressForm() {
  return (
    <FormWrapper title="Address">
      <FormikInputField label="Street" name="street" />
      <FormikInputField label="City" name="city" />
      <FormikInputField label="State" name="state" />
      <FormikInputField label="Zip" name="zip" />
    </FormWrapper>
  );
}
