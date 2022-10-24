import { FormWrapper } from "./FormWrapper";
import "./form.css";

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
        className="border-2 border-slate-200 px-2 py-1 rounded-md"
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        required
        onChange={(e) => updateFields({ password: e.target.value })}
        className="border-2 border-slate-200 px-2 py-1 rounded-md"
      />
    </FormWrapper>
  );
}
