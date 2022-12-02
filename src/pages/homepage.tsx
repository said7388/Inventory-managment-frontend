import { Outlet } from "react-router-dom";
import HomeLayout from "../components/layout/home-layout";

const Homepage = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};

export default Homepage;
