import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
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
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default AllPage;
