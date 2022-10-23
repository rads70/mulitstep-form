import { FormWrapper } from "./FormWrapper";

type UserData = {
  email: string;
  password: string;
};

type FormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function AccountForm({
  email,
  password,
  updateFields,
}: FormProps) {
  return (
    <FormWrapper title="Account">
      <label htmlFor="">Username</label>
      <input
        type="text"
        required
        autoFocus
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        required
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
