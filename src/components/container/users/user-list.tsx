import { useGetAllUserQuery } from "../../../redux/api/auth-api";
import UserListUI from "../../ui/users/user-list-ui";

const UserList = () => {
  const { data } = useGetAllUserQuery("");
  console.log(data);

  return (
    <>
      <UserListUI users={data} />
    </>
  );
};

export default UserList;
