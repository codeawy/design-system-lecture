import { IFormInput } from "../interfaces";

export const registerFormInputs: IFormInput[] = [
  {
    type: "text",
    name: "fullName",
    placeholder: "Full Name",
    id: "fullName",
    // errorMsg: undefined,
  },
  {
    type: "text",
    name: "username",
    placeholder: "Username",
    id: "username",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    id: "email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    id: "password",
  },
];
