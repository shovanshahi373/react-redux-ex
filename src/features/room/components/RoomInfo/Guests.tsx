import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";

import { Label } from "../../../../components/common";

const Guests: React.FC<{
  title: string;
  items: Array<{ title: string; icon: React.ReactNode }>;
}> = ({ title, items }) => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" color="black">
        {title}
      </Typography>
      <Grid container gap={2}>
        {items.map((item) => {
          return (
            <Grid item key={item.title}>
              <Label text={item.title} color={theme.palette.primary.main}>
                {item.icon}
              </Label>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Guests;
