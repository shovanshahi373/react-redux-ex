import { Card, CardContent } from "@mui/material";
import { Children } from "react";

const Panels: React.FC<{
  children: React.ReactNode;
  activeIndex: number;
  color: string;
}> = ({ children, color, activeIndex = 0 }) => {
  const [DisplayPanel] = Children.toArray(children).filter(
    (_, i) => i === activeIndex
  );
  return (
    <Card sx={{ maxWidth: "700px", color }}>
      <CardContent>{DisplayPanel}</CardContent>
    </Card>
  );
};

export default Panels;
