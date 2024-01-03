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
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let post1 = {
      avatar: (
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      ),
      title: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      image:
        "https://www.recipetineats.com/wp-content/uploads/2019/03/Oven-Baked-Chicken-Breast_0-SQ.jpg",
      text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    };

    let post2 = {
      avatar: (
        <Avatar sx={{ bgcolor: "green" }} aria-label="nature">
          Y
        </Avatar>
      ),
      title: "Me at the beach :)",
      subheader: "September 20, 2020",
      image:
        "https://www.gohawaii.com/sites/default/files/hero-unit-images/11500_mauibeaches.jpg",
      text: "This is an impressive view of the beach",
    };
    setPosts([post1,post2]);
  }, []);

  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post
          avatar={post.avatar}
          title={post.title}
          subheader={post.subheader}
          image={post.image}
          text={post.text}
        />
      ))}
    </Box>
  );
};

export default Feed;
