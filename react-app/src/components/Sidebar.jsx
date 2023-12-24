import {
  AccountBox,
  Article,
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
  Switch,
} from "@mui/material";
import React from "react";
import Home from "@mui/icons-material/Home";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
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
            <Switch />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
};

export default Sidebar;
