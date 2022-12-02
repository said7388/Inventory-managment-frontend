import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { defaultState } from "../../redux/features/auth-slice";
import { ROUTES } from "../../utils/routes";
import SidebarUI from "../ui/sidebar-ui";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(defaultState());
    navigate(ROUTES.LOGIN);
  };

  return <SidebarUI handleLogout={handleLogout} />;
};

export default Sidebar;
