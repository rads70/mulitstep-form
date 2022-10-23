import { FormWrapper } from "./FormWrapper";
import "./form.css";

type UserData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: FormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="">Street</label>
      <input
        type="text"
        required
        autoFocus
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="">City</label>
      <input
        type="text"
        required
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="">State</label>
      <input
        type="text"
        required
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="">Zip</label>
      <input
        type="text"
        required
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
