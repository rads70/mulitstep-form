import { FormEvent, useState } from "react";
import AccountForm from "./forms/AccountForm";
import AddressForm from "./forms/AddressForm";
import StepShow from "./forms/StepShow";
import UserForm from "./forms/UserForm";
import { useMultiStepForm } from "./hooks/useMultistepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    next();
    if (currentStepIndex === steps.length - 1) alert(JSON.stringify(data));
  };

  return (
    <div className="border relative border-slate-800 rounded-lg max-w-2xl p-6">
      <StepShow steps={steps} currentStepIndex={currentStepIndex} />
      <form onSubmit={onSubmit}>
        <div className="grid auto-cols-auto my-6">{step}</div>

        <div className="flex justify-end mt-4 gap-2">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="border border-slate-200  bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-400 transition-colors duration-200"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="border border-slate-200  bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-400 transition-colors duration-200"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
