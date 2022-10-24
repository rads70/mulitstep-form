import React, { useContext, useEffect } from "react";
import { FormContext } from "../App";

type Props = {
  steps: number;
};

function StepShow({ steps }: Props): JSX.Element {
  const { activeStepIndex } = useContext(FormContext);

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-blue-500", "text-white");
      } else {
        step.classList.remove("bg-blue-500", "text-white");
      }
    });
  }, [activeStepIndex]);

  const RenderSteps = (): JSX.Element => {
    let stepper = [];
    for (let i = 0; i < steps; i++) {
      stepper.push(
        <React.Fragment key={"step" + i}>
          <div
            className={`stepper-item border rounded-full h-10 w-10 flex items-center justify-center `}
          >
            {i + 1}
          </div>
          {i < steps - 1 ? (
            <div className="border-t-2 border-slate-900 flex-auto"></div>
          ) : null}
        </React.Fragment>
      );
    }
    return <>{stepper}</>;
  };
  return (
    <div className="flex w-2/3 justify-center items-center mx-auto mb-6">
      <RenderSteps />
    </div>
  );
}

export default StepShow;
