import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { IconContext } from "../../../icons";

interface ILabel {
  text: string;
  color: string;
  border?: string;
  children: React.ReactNode;
}

const Label: React.FC<ILabel> = ({ children, text, color, border = color }) => {
  return (
    <Box
      sx={{
        borderRadius: "1000px",
        padding: "2px 5px",
        color,
        border: `1px solid ${border}`,
        display: "inline-block",
      }}
    >
      <Grid container gap={1} alignItems={"center"} justifyContent={"center"}>
        <Grid item>
          <IconContext.Provider
            value={{ style: { color, display: "flex", fontSize: "1.5em" } }}
          >
            {children}
          </IconContext.Provider>
        </Grid>
        <Grid item>{text}</Grid>
      </Grid>
    </Box>
  );
};

export default Label;
