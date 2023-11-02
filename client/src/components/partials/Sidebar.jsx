import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import UserImg from "./UserImg";
import { useState } from "react";
import SearchDrawer from "./SearchDrawer";
import NotificationsDrawer from "./NotificationsDrawer";
import More from "./More";

export default function Sidebar() {
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [openNotifactions, setOpenNotifications] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(true);
  const handleMore = () => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const handleDrawer = () => {
    setOpenSearchDrawer(!openSearchDrawer);
  };
  const handleNotificationsDrawer = () => {
    setOpenNotifications(!openNotifactions);
  };
  return (
    <Box sx={{ display: "flex", position: "sticky", top: 0 }}>
      <CssBaseline />

      <List
        sx={{ width: 250, height: "100vh", borderRight: "1px solid lightgray" }}
      >
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              fontSize: 28,
              minHeight: 80,
              justifyContent: "initial",
              px: 3,
            }}
          >
            Baithak
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <HomeOutlinedIcon
                sx={{
                  fontSize: 32,
                  color: "#000",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ opacity: 1 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleDrawer}
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <SearchOutlinedIcon sx={{ fontSize: 32, color: "#000" }} />
            </ListItemIcon>
            <ListItemText primary="Search" sx={{ opacity: 1 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <ExploreOutlinedIcon sx={{ fontSize: 28, color: "#000" }} />
            </ListItemIcon>
            <ListItemText primary="Explore" sx={{ opacity: 1 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <MovieCreationOutlinedIcon sx={{ fontSize: 28, color: "#000" }} />
            </ListItemIcon>
            <ListItemText primary="Reels" sx={{ opacity: 1 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleNotificationsDrawer}
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <FavoriteBorderOutlinedIcon
                sx={{ fontSize: 28, color: "#000" }}
              />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <AddBoxOutlinedIcon sx={{ fontSize: 28, color: "#000" }} />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <UserImg height={30} width={30} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleMore}
            sx={{
              minHeight: 60,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 2,
                justifyContent: "center",
              }}
            >
              <MenuOutlinedIcon sx={{ fontSize: 28, color: "#000" }} />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>
      </List>
      <SearchDrawer open={openSearchDrawer} setOpen={setOpenSearchDrawer} />
      <NotificationsDrawer
        open={openNotifactions}
        setOpen={setOpenNotifications}
      />
      <More anchorEl={anchorEl} open={open} />
    </Box>
  );
}
