import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Category from "../components/container/category/category";
import SingleCategory from "../components/container/category/single-category";
import Department from "../components/container/department/department";
import SingleDepartment from "../components/container/department/single-department";
import Products from "../components/container/products/products";
import Registration from "../components/container/registration";
import { selectAuth } from "../redux/features/auth-slice";
import { ROUTES } from "../utils/routes";
import Homepage from "./homepage";
import Login from "./login";

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectAuth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.LOGIN);
    }
  }, [isLoggedIn, navigate]);

  return <>{children}</>;
};

const AllPage = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }>
        <Route index element={<Products />} />
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
        <Route path={ROUTES.DEPARTMENTS} element={<Department />} />
        <Route
          path={`${ROUTES.DEPARTMENTS}/:id`}
          element={<SingleDepartment />}
        />
        <Route path={`${ROUTES.CATEGORY}/:id`} element={<SingleCategory />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default AllPage;
