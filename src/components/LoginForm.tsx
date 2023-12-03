import { useState, FormEvent, ChangeEvent } from "react";

import Button from "./ui/Button";
import Input from "./ui/Input";
import ButtonGroup from "./ui/ButtonGroup";
import Link from "./ui/Link";

// ** Backend => User => {username: string,email: string, password: string}

interface IUser {
  username: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  // ** TS
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ** SEND DATA VIA API
    console.log(user);

    // ** RESET
  };
  return (
    <>
      <h2>LOGIN FORM</h2>
      <form
        className="space-y-2"
        onSubmit={onSubmitHandler}
        onReset={() =>
          setUser({
            username: "",
            email: "",
            password: "",
          })
        }
      >
        {/* CONTROLLED INPUT */}
        <Input
          type="email"
          name="email"
          className="border-2 border-white rounded-md w-full py-1 px-2"
          placeholder="Email"
          value={user["email"]}
          onChange={onChangeHandler}
          text="CODEAWY"
        />
        <input
          type="password"
          name="password"
          className="border-2 border-white rounded-md w-full py-1 px-2"
          placeholder="Password"
          value={user["password"]}
          onChange={onChangeHandler}
        />
        <ButtonGroup>
          <Button>Submit</Button>
          <Button variant={"secondary"}>RESET</Button>
          <Button variant={"destructive"}>Destroy</Button>
          <Button>Small</Button>
          <Button>Large</Button>
        </ButtonGroup>
      </form>

      <Link href="/nextjs.org" variant={"default"} size="sm">
        Get Started
      </Link>

      <Link href="/nextjs.org" variant="secondary" size="lg">
        Learn Next.js
      </Link>
    </>
  );
};

export default LoginForm;
