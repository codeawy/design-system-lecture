import { LabelHTMLAttributes, ReactNode } from "react";

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = ({ children, ...rest }: IProps) => {
  return (
    <label className="text-sm" {...rest}>
      {children}
    </label>
  );
};

export default Label;
