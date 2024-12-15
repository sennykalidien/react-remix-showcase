import { CommonComponentProps } from "~/types";
import { ReactNode } from "react";

interface InputErrorProps extends CommonComponentProps {
  children: ReactNode;
}

function InputError({ children }: InputErrorProps) {
  return (
    <p role="alert" className="text-red-dark-red">
    {children}
    </p>
  )
}

export default InputError;
