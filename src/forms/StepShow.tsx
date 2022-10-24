import React, { ReactNode } from "react";

type Props = {
  steps: ReactNode[];
  currentStepIndex: number;
};

function StepShow({ steps, currentStepIndex }: Props) {
  return (
    <div className="flex w-2/3 justify-center items-center mx-auto">
      {steps.map((step, index) => (
        <React.Fragment key={"step" + index}>
          <div
            className={`rounded-full bg-blue-400 h-10 w-10 flex items-center justify-center ${
              index === currentStepIndex ? "stepActive" : ""
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 ? (
            <div className="border-t-2 border-slate-900 flex-auto"></div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StepShow;
