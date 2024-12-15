import { ReactNode } from "react";
import { CommonComponentProps } from "~/types";

interface NavProps extends CommonComponentProps {
  children: ReactNode
}

function NavItem({ children}: NavProps) {
  return (
    <li>{children}</li>
  )
}

function Nav({ children}: NavProps) {
  return (
    <ul>
      {children}
    </ul>
  )
}

export default Nav;
export { NavItem }
