import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import { avatarImages } from "./Rightbar";

const Conversation = ({sender,message}) => {

  return (
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={sender.name} src={sender.img} />
      </ListItemAvatar>
      <ListItemText
        primary={message.title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {sender.name}
            </Typography>
            {message.content}
          </React.Fragment>
        }
      />
    </ListItem>

  );
};

export default Conversation;
