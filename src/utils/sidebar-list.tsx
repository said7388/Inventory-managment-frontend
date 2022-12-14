import { BsPersonPlusFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { MdCategory, MdOutlineInventory2 } from "react-icons/md";
import { ROUTES } from "./routes";

export const sidebarList = [
  {
    title: "Product",
    url: ROUTES.HOME,
    icon: <MdOutlineInventory2 />,
  },
  {
    title: "Category",
    url: ROUTES.CATEGORY,
    icon: <MdCategory />,
  },
  {
    title: "Department",
    url: ROUTES.DEPARTMENTS,
    icon: <FcDepartment />,
  },
  {
    title: "All User",
    url: ROUTES.USERS,
    icon: <FaUsers />,
  },
  {
    title: "Create User",
    url: ROUTES.REGISTRATION,
    icon: <BsPersonPlusFill />,
  },
];
