import { FormEvent, useState } from "react";
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";
import { IUser } from "./interfaces";
import { loginFormSchema } from "./schema/LoginFormSchema";
import { v4 as uuid } from "uuid";

function App() {
  // ** 1 - state (userList) => array of submitted user ✅
  // ** 2 - Pass the userListState through UserList Component ✅
  // ** 3 - Create a user state for LoginForm Component ✅

  const [userList, setUserList] = useState<IUser[]>([]);
  const [removeUserList, setRemoveUserList] = useState<IUser[]>([]);

  const [user, setUser] = useState<IUser>({
    id: "",
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<IUser>({
    id: "",
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = loginFormSchema(user);

    // ** Boolean
    const allRequiredInputsFilled = Object.values(validationErrors).every(value => value === "");

    if (!allRequiredInputsFilled) {
      setErrors(validationErrors);
      return;
    }

    console.log("SEND USER VIA API");
    // ** Store submitted user into userList

    setUserList([...userList, { ...user, id: uuid() }]);
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-4">
        <div className="border flex-1 rounded-md p-2">
          <h3 className="text-center bg-white text-black w-fit rounded-md p-2 mx-auto font-semibold">userListState</h3>
          <UserList
            list={userList}
            setUserList={setUserList}
            removeUserList={removeUserList}
            setRemoveUserList={setRemoveUserList}
          />

          <ul>
            {removeUserList.map(item => (
              <li>-{item.id}</li>
            ))}
          </ul>
        </div>
        <LoginForm
          user={user}
          setUser={setUser}
          errors={errors}
          setErrors={setErrors}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
    </div>
  );
}

export default App;
