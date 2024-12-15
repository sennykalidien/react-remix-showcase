import {ChangeEvent, ReactNode} from "react";
import clsx from "clsx";
import { CommonComponentProps, InputComponentProps } from "~/types";

interface SelectProps extends CommonComponentProps, InputComponentProps {
  children: ReactNode,
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
}

function Select({
  className,
  name,
  children,
  defaultValue,
  hasError,
  ...props
}: SelectProps) {
  return (
  <div className="relative">
    <select className={clsx("appearance-none")} {...props}>
      {children}
    </select>
  </div>
  )
}

export default Select
