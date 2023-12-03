import { type VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ReactNode } from "react";

import { buttonVariants } from "./Button";
import { cn } from "../../lib/utils";

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Link = ({ children, variant, size, ...rest }: IProps) => {
  return (
    <a className={`${cn(buttonVariants({ variant, size }))} no-underline`} {...rest}>
      {children}
    </a>
  );
};

export default Link;
