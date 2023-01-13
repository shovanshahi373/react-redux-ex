import { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const TabsSection: React.FC<{
  items: { label: string; id: string | number }[];
  children: (activeIndex: number) => JSX.Element;
}> = ({ items, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, index: number) =>
    setActiveIndex(index);
  return (
    <>
      <Tabs
        value={activeIndex}
        onChange={handleChange}
        indicatorColor={"primary"}
        variant="fullWidth"
      >
        {items.map((item) => {
          return <Tab key={item.id} label={item.label} />;
        })}
      </Tabs>
      {children(activeIndex)}
    </>
  );
};

export default TabsSection;
