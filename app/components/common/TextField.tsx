import { ChangeEvent } from "react";
import clsx from "clsx";
import { CommonComponentProps, InputComponentProps } from "~/types";

interface TextFieldProps extends CommonComponentProps, InputComponentProps {
  type: HTMLInputElement['type']
  placeholder?: HTMLInputElement['placeholder']
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  autoFocus?: boolean
}

function TextField({ className, hasError, ...props }: TextFieldProps) {
  return (
    <input
      className={clsx(hasError ? "border-red-dark-red" : "border-white", className, "w-full border-r-8 py-4 px-4 bg-white")}
      {...props} />
  )
}

export default TextField;
