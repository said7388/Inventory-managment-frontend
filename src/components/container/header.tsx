import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled, Theme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { HiMenu } from "react-icons/hi";
import Logo from "../core-ui/helper/logo";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  theme?: Theme;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, handleDrawerOpen }: any) => {
  return (
    <AppBar
      sx={{ bgcolor: "white" }}
      elevation={1}
      position='fixed'
      open={open}>
      <Toolbar>
        <IconButton
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}>
          <HiMenu />
        </IconButton>
        {!open && <Logo />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
