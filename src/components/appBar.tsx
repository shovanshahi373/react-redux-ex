import { AppBar, Typography, useTheme, Grid, Link } from "@mui/material";
import useMobile from "../hooks/useMobileWidth";
import { MenuIcon } from "../icons";

export const Index = ({
  title,
  onclick,
}: {
  title: string;
  onclick: () => void;
}) => {
  const theme = useTheme();
  const isMobile = useMobile();
  console.log({ isMobile });
  return (
    <AppBar
      position="sticky"
      style={{
        top: 0,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        boxShadow: "0 2px 10px 0 rgba(0,0,0,.5)",
      }}
    >
      <Grid container alignItems={"center"} gap={2}>
        {isMobile && (
          <Grid item>
            <Link href="#" onClick={onclick}>
              <MenuIcon size={40} color={"white"} />
            </Link>
          </Grid>
        )}
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Index;
