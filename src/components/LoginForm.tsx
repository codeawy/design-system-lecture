import { ChangeEvent, FormEvent, Fragment, useState } from "react";

import { IUser } from "../interfaces";
import { registerFormInputs } from "../lists/registerInputs";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import InputErrorMsg from "./InputErrorMsg";
import { loginFormSchema } from "../schema/LoginFormSchema";

const LoginForm = () => {
  const [user, setUser] = useState<IUser>({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<IUser>({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = loginFormSchema(user);
    console.log(validationErrors);

    // ** Boolean
    const allRequiredInputsFilled = Object.values(validationErrors).every(value => value === "");

    if (!allRequiredInputsFilled) {
      setErrors(validationErrors);
      return;
    }

    console.log("SEND USER VIA API");
    console.log(user);
  };

  return (
    <div className="w-[350px] mx-auto">
      <h2 className="text-center text-3xl mb-10">Build a new Project</h2>
      <form className="space-y-3 border-[1px] border-gray-300 p-2 rounded-md" onSubmit={onSubmitHandler}>
        {registerFormInputs.map(input => (
          <Fragment key={input.id}>
            <Label htmlFor={input.id}>{input.name}</Label>
            <div className="flex flex-col space-x-3">
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
          </Fragment>
        ))}
        <Button fullWidth>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
