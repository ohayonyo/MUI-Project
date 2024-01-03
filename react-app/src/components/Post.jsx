import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import React from "react";

const Post = ({ avatar, title, subheader, image, text }) => {
  return (
    <Card sx={{mb:2}}>
      <CardHeader
        avatar={avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="300vh"
        image={image}
        alt="Paella dish"
        style={{ objectFit: "fill" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
