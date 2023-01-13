import {
  TripIcon,
  TransferIcon,
  MoneyIcon,
  ReservationIcon,
  CrossIcon,
  RoomIcon,
  IconContext,
  UserConfigIcon,
  UsersIcon,
} from "../icons";

import { ListRenderer } from "./common";
import { IListItem } from "./common/ListRenderer";

import { useTheme, Divider, Box } from "@mui/material";

const navigation: IListItem[] = [
  {
    title: "My Trips",
    body: "View and Manage tour travel",
    component: <TripIcon />,
  },
  {
    title: "Manage Transfers",
    body: "Book and modify transportation",
    component: <TransferIcon />,
  },
  {
    title: "Make a Payment",
    body: "Make and view payment history",
    component: <MoneyIcon />,
  },
  {
    title: "Modify My Reservation",
    body: "Make changes and see pricing",
    component: <ReservationIcon />,
  },
  {
    title: "Cancel My Reservation",
    body: "Review policies and cancel",
    component: <CrossIcon />,
  },
  {
    title: "Room Management",
    body: "Manage rooms",
    component: <RoomIcon />,
  },
];

const accountManagement: IListItem[] = [
  {
    title: "My profile",
    component: <UserConfigIcon />,
  },
  {
    title: "Guests",
    component: <UsersIcon />,
  },
];

const SideBar = () => {
  const theme = useTheme();
  return (
    <Box flex={1} sx={{ color: theme.palette.text.secondary }}>
      <IconContext.Provider
        value={{
          style: {
            color: theme.palette.primary.main,
            fontSize: "1.5em",
          },
        }}
      >
        <ListRenderer title="Trip Management" list={navigation} />
        <Divider />
        <ListRenderer title="Account Management" list={accountManagement} />
      </IconContext.Provider>
    </Box>
  );
};

export default SideBar;
