import { Box, useTheme, Typography, Container } from "@mui/material";
import { useEffect } from "react";
import { fetchRoomData } from "../features/room/room.slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Panels, TabsSection } from "./common";
import AppBar from "./appBar";

import RoomInfo from "../features/room/components/RoomInfo";

const roomIds =
  "ceae0d77-2fd6-dbe3-0f33-61c355c106ff,4c0ad727-1652-3b6e-4adb-61c21a17a4b1";

const Home = ({ open }: { open?: () => void }) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useAppSelector((store) => store.room);

  const tabs = data?.map((item, id) => ({ label: item.roomName, id })) || [];

  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchRoomData(roomIds));
  }, [dispatch]);

  return (
    <Box>
      <AppBar title={"Room Management"} onclick={open!} />
      <Container style={{ padding: theme.spacing(1.5) }}>
        {error ? (
          "some error occcured"
        ) : isLoading ? (
          <Typography>loading...</Typography>
        ) : (
          <>
            <TabsSection items={tabs}>
              {(activeIndex) => {
                return (
                  <Panels
                    activeIndex={activeIndex}
                    color={theme.palette.text.secondary}
                  >
                    {data.map((item) => {
                      return <RoomInfo key={item.roomName} item={item} />;
                    })}
                  </Panels>
                );
              }}
            </TabsSection>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Home;
