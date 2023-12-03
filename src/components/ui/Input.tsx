import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const Input = (props: IProps) => {
  return <input {...props} test-id={props.text} />;
};

export default Input;
