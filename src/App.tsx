import { createContext, useState } from "react";
import { Formik, Form, FormikState } from "formik";
import * as yup from "yup";

import AccountForm from "./forms/AccountForm";
import AddressForm from "./forms/AddressForm";
import StepShow from "./forms/StepShow";
import UserForm from "./forms/UserForm";

interface IContext {
  activeStepIndex: number;
}
export const FormContext = createContext<IContext>({ activeStepIndex: 0 });

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

const schema = yup.object().shape({
  firstName: yup.string().required().max(50).label("First Name"),
  lastName: yup.string().max(50).label("Last Name"),
  age: yup.number().label("Age"),
  street: yup.string().max(50).label("Street"),
  city: yup.string().max(50).label("City"),
  state: yup.string().max(50).label("State"),
  zip: yup.string().max(50).label("Zip code"),
  email: yup.string().max(50).label("Email"),
  password: yup.string().max(50).min(8).label("Password"),
});

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const formSteps = [<UserForm />, <AddressForm />, <AccountForm />];

  const handleFormikSubmit = (values: FormData, resetForm: any): void => {
    const index = activeStepIndex;

    if (index !== formSteps.length - 1) {
      setActiveStepIndex(index + 1);
      return;
    }

    alert(JSON.stringify(values));
    resetForm();
    setActiveStepIndex(0);
  };

  const back = () => {
    if (activeStepIndex !== 0) {
      const index = activeStepIndex - 1;
      setActiveStepIndex(index);
    }
  };

  const RenderStep = (): JSX.Element => {
    return <>{formSteps[activeStepIndex]}</>;
  };

  return (
    <FormContext.Provider value={{ activeStepIndex }}>
      <div className="border relative border-slate-800 rounded-lg max-w-2xl p-6">
        <Formik
          initialValues={INITIAL_DATA}
          onSubmit={(values, { resetForm }) =>
            handleFormikSubmit(values, resetForm)
          }
          validationSchema={schema}
          enableReinitialize
        >
          <Form>
            <StepShow steps={formSteps.length} />
            <RenderStep />

            <div className="flex justify-end mt-4 gap-2">
              {activeStepIndex !== 0 && (
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
                {activeStepIndex === formSteps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </FormContext.Provider>
  );
}

export default App;
