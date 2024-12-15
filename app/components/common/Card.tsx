import { ReactNode } from "react";
import {CommonComponentProps} from "~/types";
import clsx from "clsx";

interface CardProps extends CommonComponentProps {
  outlined?: boolean;
  children: ReactNode;
}

interface CardContentProps extends CommonComponentProps {
  children: ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={clsx(className, "p-4")}>
      { children }
    </div>
  )
}

function Card({ outlined, children }: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default Card
