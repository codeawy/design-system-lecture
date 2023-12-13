import { ChangeEvent, FormEvent } from "react";

import { IUser } from "../interfaces";
import { registerFormInputs } from "../lists/registerInputs";
import InputErrorMsg from "./InputErrorMsg";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";

interface IProps {
  user: IUser;
  setUser: (user: IUser) => void;
  errors: IUser;
  setErrors: (error: IUser) => void;
  onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ user, setUser, errors, setErrors, onSubmitHandler }: IProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value }); // ** user
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="w-[350px] mx-auto">
      <form className="space-y-3 border-[1px] border-gray-300 p-2 rounded-md" onSubmit={onSubmitHandler}>
        {registerFormInputs.map(input => (
          <div key={input.id} className="my-2">
            <Label htmlFor={input.id} className="capitalize">
              {input.name}
            </Label>
            <div className="flex flex-col">
              <Input
                id={input.id}
                type={input["name"]}
                name={input.name}
                placeholder={input.placeholder}
                value={user[input.name]}
                onChange={onChangeHandler}
              />

              <InputErrorMsg errorMsg={errors[input.name]} />
            </div>
          </div>
        ))}

        <Button fullWidth className="font-semibold">
          Add User
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
