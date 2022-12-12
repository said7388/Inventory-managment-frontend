import { useGetAllUserQuery } from "../../../redux/api/auth-api";
import UserListUI from "../../ui/users/user-list-ui";

const UserList = () => {
  const { data } = useGetAllUserQuery(
    "populate[0]=role&populate[1]=department",
  );

  return (
    <>
      <UserListUI users={data} />
    </>
  );
};

export default UserList;
