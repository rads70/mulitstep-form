import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User details">
      <label htmlFor="">First Name</label>
      <input
        type="text"
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="">Age</label>
      <input
        type="number"
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
