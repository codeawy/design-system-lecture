import { IUser } from "../interfaces";
import Button from "./ui/Button";

interface IProps {
  list: IUser[];
  setUserList: (list: IUser[]) => void;
  removeUserList: IUser[];
  setRemoveUserList: (list: IUser[]) => void;
}

const UserList = ({ list, setUserList, removeUserList, setRemoveUserList }: IProps) => {
  const onRemove = (id: string) => {
    const filteredList = list.filter(user => user.id !== id);
    setUserList(filteredList);
    const removedItems = list.filter(item => item.id === id);
    setRemoveUserList([...removeUserList, ...removedItems]);
  };

  return (
    <div className="rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
      {list?.length ? (
        list?.map(user => (
          <div className="border rounded-md p-1" key={user.id}>
            <Button onClick={() => onRemove(user.id)}>❌</Button>
            <span>FullName: {user.id}</span>
            <h4>FullName: {user.fullName}</h4>
            <h5>Username: {user.username}</h5>
            <p>Email: {user.email}</p>
          </div>
        ))
      ) : (
        <h3>THERE'S NO USER YEY!</h3>
      )}
    </div>
  );
};

export default UserList;
