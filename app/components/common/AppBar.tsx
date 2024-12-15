import { ReactNode } from "react";
import { CommonComponentProps } from "~/types";

interface AppBarProps extends CommonComponentProps {
  children?: ReactNode
}

function AppBar({ children}: AppBarProps) {
  return <div className="bg-white p-2">{children}</div>
}

export default AppBar;
