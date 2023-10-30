import Posts from "../posts/Posts";
import { Box } from "@mui/material";
import Story from "../stories/Story";

function Feed() {
  return (
    <Box sx={{ mb: 6 }}>
      <Story />
      <Posts />
    </Box>
  );
}

export default Feed;
