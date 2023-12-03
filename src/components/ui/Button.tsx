/* eslint-disable react-refresh/only-export-components */
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ** Default styles (WITH ALL VARIANTS => default, solid, secondary, and ghost)
// **
export const buttonVariants = cva("p-2 rounded-md text-base w-fit ", {
  variants: {
    // ** Variants =>  default, secondary, ghost
    variant: {
      default: "bg-white text-black",
      secondary: "bg-gray-500 hover:bg-gray-700 duration-300",
      destructive: "bg-red-500 hover:bg-red-600",
    },
    size: {
      sm: "text-sm p-1",
      md: "text-base ",
      lg: "text-lg p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ children, variant, size, ...rest }: IProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...rest}>
      {children}
    </button>
  );
};

export default Button;
