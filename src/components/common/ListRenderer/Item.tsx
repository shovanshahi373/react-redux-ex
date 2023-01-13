import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import {IListItem} from "./types"

const ListItemRenderer: React.FC<IListItem> = ({ component, title, body }) => {
  return (
    <ListItem>
      <ListItemIcon>{component}</ListItemIcon>
      <ListItemText>
        <Typography>{title}</Typography>
        {body}
      </ListItemText>
    </ListItem>
  );
};

export default ListItemRenderer;
