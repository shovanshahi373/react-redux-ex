import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { LabelGroup, Accordion } from "../../../../components/common";
import {
  RoomIcon,
  OptionIcon,
  CheckIcon,
  MoneyIcon,
  ReservationIcon,
  StarIcon,
  UserIcon,
  ChildIcon,
} from "../../../../icons";
import { IRoomData } from "../../types";

import DD from "./Guests";

const guests = [
  {
    title: "Adult 1",
    icon: <UserIcon />,
  },
  {
    title: "Adult 2",
    icon: <UserIcon />,
  },
  {
    title: "Child 1",
    icon: <ChildIcon />,
  },
];

const roomExtras = [
  {
    title: "Transport Purchased",
    icon: <UserIcon />,
  },
  {
    title: "Travel Protection",
    icon: <StarIcon />,
  },
];

const RoomInfo: React.FC<{ item: IRoomData }> = ({ item }) => {
  const theme = useTheme();
  const color = theme.palette.primary.main;
  return (
    <Grid container direction={"column"} columnGap={2}>
      <Grid item>
        <Grid container gap={2}>
          <Grid item alignSelf={"center"}>
            <Avatar
              sx={{
                backgroundColor: color,
              }}
            >
              <RoomIcon />
            </Avatar>
          </Grid>
          <Grid item flex={1}>
            <Typography>{item.roomName}</Typography>
            <Typography>{item.hotelName}</Typography>
            <Typography>
              {item.travelStartDate} - {item.travelEndDate}
            </Typography>
          </Grid>
          <Grid item>
            <OptionIcon />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Box
          component={"img"}
          sx={{
            height: "300px",
            width: "100%",
            objectFit: "cover",
            backgroundColor: theme.palette.text.secondary,
          }}
          src={item.hotelImage}
          alt={item.hotelName}
        />
        <LabelGroup
          items={[
            {
              icon: <CheckIcon />,
              title: "Booked",
              theme: theme.palette.success.main,
            },
            {
              icon: <MoneyIcon />,
              title: `Balance Due - $${item.remainingBalance}`,
              theme: "black",
            },
          ]}
        />
        <Typography>{item.hotelDescription}</Typography>
      </Grid>

      <Grid item>
        <Accordion
          summary={
            <LabelGroup
              items={[
                {
                  icon: <ReservationIcon />,
                  title: "MODIFY",
                  theme: color,
                },
                {
                  icon: <MoneyIcon />,
                  title: "MAKE PAYMENT",
                  theme: color,
                },
              ]}
            />
          }
          content={
            <Grid container direction={"column"}>
              <Grid item>
                <DD items={guests} title={"Guest in this room"} />
              </Grid>

              <Grid item>
                <DD items={roomExtras} title={"Room Extras"} />
              </Grid>
            </Grid>
          }
        ></Accordion>
        <Divider />
      </Grid>
      <Grid item>
        <Typography variant="h4">Past Rooms</Typography>
        <Grid container gap={2}>
          <Grid item alignSelf={"center"}>
            <Avatar
              sx={{
                backgroundColor: color,
              }}
            >
              <RoomIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography>No past rooms</Typography>
            <Typography>
              We couldn't find any past rooms in your account
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoomInfo;
