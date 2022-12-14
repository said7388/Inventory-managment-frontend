import { useGetAllUserQuery } from "../../../redux/api/auth-api";
import UserListUI from "../../core-ui/users/user-list-ui";

const UserList = () => {
  const { data } = useGetAllUserQuery("");

  return (
    <>
      <UserListUI users={data} />
    </>
  );
};

export default UserList;
