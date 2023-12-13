export interface IUser {
  id: string;
  fullName: string;
  username: string;
  email: string;
  password: string;
}

type TFormNameTypes = "username" | "fullName" | "email" | "password";

export interface IFormInput {
  type: string;
  name: TFormNameTypes;
  id: string;
  placeholder: string;
}
