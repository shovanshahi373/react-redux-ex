import { Grid, Drawer, Link } from "@mui/material";
import React, {
  Children,
  useState,
  cloneElement,
  ReactElement,
  JSXElementConstructor,
} from "react";
import { CrossIcon } from "../../icons";
import useMobileWidth from "../../hooks/useMobileWidth";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [Sidebar, Main] = Children.toArray(children);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobileWidth();
  return (
    <>
      {isMobile && (
        <Drawer
          dir="right"
          open={isOpen}
          PaperProps={{
            sx: { width: "100vw" },
          }}
        >
          <Link href={"#"} onClick={() => setIsOpen(false)}>
            <CrossIcon />
          </Link>
          {Sidebar}
        </Drawer>
      )}
      <Grid container maxWidth={"1000px"} margin={"auto"}>
        {!isMobile && (
          <Grid item xs={12} sm={3}>
            {Sidebar}
          </Grid>
        )}
        <Grid item xs={12} sm={7} style={{ flex: 1, maxWidth: "none" }}>
          {cloneElement(
            Main as ReactElement<any, string | JSXElementConstructor<any>>,
            { open: () => setIsOpen(true) }
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
