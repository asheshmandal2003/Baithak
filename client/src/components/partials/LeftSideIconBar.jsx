import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import UserImg from "./UserImg";

function LeftSideIconBar({ open, setOpen }) {
  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex", position: "sticky", top: 0 }}>
      <CssBaseline />
      <List sx={{ height: "100vh", borderRight: "1px solid lightgray" }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              fontSize: 28,
              minHeight: 80,
              justifyContent: "initial",
              px: 3,
            }}
          >
            <Box
              component="img"
              src="/images/instagram.svg"
              height={30}
              width={30}
            />
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
              <FavoriteBorderOutlinedIcon
                sx={{ fontSize: 28, color: "#000" }}
              />
            </ListItemIcon>
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
              <MenuOutlinedIcon sx={{ fontSize: 28, color: "#000" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default LeftSideIconBar;
