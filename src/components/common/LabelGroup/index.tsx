import { Grid } from "@mui/material";
import React from "react";
import Label from "../Label";

const LabelGroup: React.FC<{
  items: Array<{ title: string; icon: React.ReactNode; theme: string }>;
}> = ({ items }) => {
  return (
    <Grid container gap={2}>
      {items.map((item) => {
        return (
          <Grid item>
            <Label text={item.title} color={item.theme}>
              {item.icon}
            </Label>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default LabelGroup;
