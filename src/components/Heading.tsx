import { ReactNode } from "react";

interface IProps {
  as: "h1" | "h2" | "h3" | "h4" | "h6";
  children: ReactNode;
  className?: string;
}

const Heading = ({ as: Component, className, children }: IProps) => {
  return <Component className={className}>{children}</Component>;
};

export default Heading;
