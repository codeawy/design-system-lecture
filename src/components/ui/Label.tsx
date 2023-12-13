import { LabelHTMLAttributes, ReactNode } from "react";

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = ({ children, ...rest }: IProps) => {
  return (
    <label className="text-sm dark:text-purple-700" {...rest}>
      {children}
    </label>
  );
};

export default Label;
