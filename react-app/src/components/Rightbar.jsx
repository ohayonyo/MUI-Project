import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Conversation from "./Conversation";

export const avatarImages = [
  "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
  "https://www.shareicon.net/data/512x512/2016/08/18/814068_face_512x512.png",
  "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDc5NTExN3x8ZW58MHx8fHx8",
  "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/313602990/original/65a58d5f514e181ac21eb631009be362cdf41c4e.png",
  "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
];

const lastPhotos = [
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2 2x",
    title: "aaa",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2 2x",
    title: "bbb",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format&dpr=2 2x",
    title: "ccc",
  },
];

const Conversations = [
  {
    sender: {
      img: "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
      name: "Remy Sharp",
    },
    message: {
      title: "Brunch this weekend?",
      content: "— I'll be in your neighborhood doing errands this…",
    },
    id: 1,
  },
  {
    sender: {
      img: avatarImages[1],
      name: "Yoad Ohayon",
    },
    message: {
      title: "Job Interview",
      content: "— Omer did you start looking for a job?",
    },
    id: 2,
  },
  {
    sender: {
      img: avatarImages[1],
      name: "Yoad Ohayon",
    },
    message: {
      title: "More programming?",
      content: "— I'll be in your neighborhood doing errands this…",
    },
    id: 3,
  },
];

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "flex" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={avatarImages[0]} />
          <Avatar alt="Travis Howard" src={avatarImages[1]} />
          <Avatar alt="Cindy Baker" src={avatarImages[2]} />
          <Avatar alt="Agnes Walker" src={avatarImages[3]} />
          <Avatar alt="Trevor Henderson" src={avatarImages[4]} />
          <Avatar alt="Trevis Henderson" src={avatarImages[5]} />
          <Avatar alt="Yoad Ohayon" src="" />
          <Avatar alt="Yoad Ohayon" src="" />
          <Avatar alt="Yoad Ohayon" src="" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5} sx={{ height: 100 }}>
          {lastPhotos.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{
            width: '100%',
            height: 200,
            bgcolor: "background.paper",
            position: "fixed",
            overflowY: 'scroll', 
            maxWidth: 300,
          }}
        >
          {Conversations.map((conversation) => {
            return (
              <>
                <Conversation
                  key={conversation.id}
                  sender={conversation.sender}
                  message={conversation.message}
                />
                <Divider />
              </>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
