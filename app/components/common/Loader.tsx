import { ReactNode } from "react";
import { CommonComponentProps } from "~/types";
import AirplaneIcon from "./icons/AirplaneIcon";
import clsx from "clsx";

interface LoaderProps extends CommonComponentProps {
  children?: ReactNode
}

function Loader({ className, children }: LoaderProps) {
  return (
    <div className={clsx(className, "w-36 h-36")}>
      <AirplaneIcon className="animate-spin" />
      <p className="text-center">{children ? <>{children}</> : <>Loading...</>}</p>
    </div>
  )
}

export default Loader
