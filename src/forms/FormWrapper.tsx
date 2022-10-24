import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: Props) {
  return (
    <>
      <h2 className=" text-center m-0 mb-8 text-2xl">{title}</h2>
      <div className="grid gap-y-4 gap-x-2 justify-start items-center grid-cols-form">
        {children}
      </div>
    </>
  );
}
