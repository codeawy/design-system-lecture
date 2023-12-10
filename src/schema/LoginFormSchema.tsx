import { IUser } from "../interfaces";

export const loginFormSchema = (user: IUser) => {
  const errors: IUser = { fullName: "", username: "", email: "", password: "" };

  if (!user.fullName.length) {
    errors.fullName = "Full Name is Required!";
  }

  if (!user.username.length) {
    errors.username = "Username is Required!";
  }

  if (!user.email.length) {
    errors.email = "Email address is Required!";
  }

  if (!user.password.length) {
    errors.password = "Password is Required!";
  }

  return errors;
};
