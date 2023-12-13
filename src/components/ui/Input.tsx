import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-[1px] border-gray-300 shadow-md focus:border-white 
      focus:outline-none focus:ring-1 focus:ring-white rounded-lg 
      px-3 py-3 text-md w-full bg-transparent"
      {...rest}
    />
  );
};

export default Input;
