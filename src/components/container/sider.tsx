import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { defaultState } from "../../redux/features/auth-slice";
import { ROUTES } from "../../utils/routes";
import { sidebarList } from "../../utils/sidebar-list";
import Logo from "../core-ui/helper/logo";
import DrawerHeader from "./drawer-header";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sider = ({ open, handleDrawerClose }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(defaultState());
    navigate(ROUTES.LOGIN);
  };

  return (
    <Drawer variant='permanent' open={open}>
      <DrawerHeader
        sx={{
          justifyContent: "space-between",
        }}>
        <Logo />
        <IconButton onClick={handleDrawerClose}>
          <IoIosArrowBack />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarList?.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link to={item.url}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    fontSize: 20,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                fontSize: 20,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}>
              <MdOutlineLogout />
            </ListItemIcon>
            <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sider;
