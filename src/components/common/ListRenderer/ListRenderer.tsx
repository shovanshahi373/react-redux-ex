import { List, Typography } from "@mui/material";
import { IListItem } from "./types";
import ListItemRenderer from "./Item";

const ListRenderer: React.FC<{ title: string; list: Array<IListItem> }> = ({
  title,
  list,
}) => {
  return (
    <>
      <Typography>{title}</Typography>
      <List>
        {list.map((item) => (
          <ListItemRenderer key={item.title} {...item} />
        ))}
      </List>
    </>
  );
};

export default ListRenderer;
