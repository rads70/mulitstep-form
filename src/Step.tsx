import React, { useContext } from "react";
import { FormContext } from "./App";
import AddressForm from "./forms/AddressForm";
import UserForm from "./forms/UserForm";

const Step = () => {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent: JSX.Element = <></>;
  switch (activeStepIndex) {
    case 0:
      stepContent = <UserForm />;
      break;
    case 1:
      stepContent = <UserForm />;
      break;
    default:
      break;
  }

  return <>{stepContent}</>;
};

export default Step;
