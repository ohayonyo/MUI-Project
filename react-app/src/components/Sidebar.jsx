import {
  AccountBox,
  Article,
  ChangeHistory,
  Group,
  Inbox,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
} from "@mui/material";
import React from "react";
import Home from "@mui/icons-material/Home";
import SidebarOption from "./SidebarOption";

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={'fixed'}>
        <List>
          <SidebarOption name={"Homepage"} href={"#home"} icon={<Home />} />
          <SidebarOption name={"Pages"} href={"#pages"} icon={<Article />} />
          <SidebarOption name={"Groups"} href={"#groups"} icon={<Group />} />
          <SidebarOption
            name={"Marketplace"}
            href={"#marketplace"}
            icon={<Storefront />}
          />
          <SidebarOption name={"Friends"} href={"#friends"} icon={<Person />} />
          <SidebarOption
            name={"Settings"}
            href={"#settings"}
            icon={<Settings />}
          />
          <SidebarOption
            name={"Profile"}
            href={"#profile"}
            icon={<AccountBox />}
          />

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onClick={()=>setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
        <Stack width={180} height={100} justifyContent={'center'} bgcolor={'white'}>
          <Box flex={2} bgcolor={'blue'}></Box>
          <Box flex={4} alignSelf={'center'} pb={2} pr={1}>
            <ChangeHistory sx={{position:'relative',width:40,height:40,left:25,top:5,color:'blue'}}/>
            <ChangeHistory sx={{position:'relative',width:40,height:40,right:14,top:14,color:'blue',transform: 'rotate(180deg);'}}/>
          </Box>
          <Box flex={2} bgcolor={'blue'}></Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
