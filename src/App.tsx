import React from "react";
import { Divider, Grid, ThemeProvider } from "@mui/material";
import SideBar from "components/sidebar";
import Home from "components/home";
import Layout from "components/layouts/main";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Grid container flexWrap={"nowrap"} height={"100%"}>
          <Grid item flex={1}>
            <SideBar />
          </Grid>
          <Grid item>
            <Divider sx={{ display: "inline-block" }} orientation="vertical" />
          </Grid>
        </Grid>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
