import { Box, Typography } from "@mui/material";
import UserImg from "./UserImg";

function RightSidebar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        mt={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          mb: 3,
        }}
      >
        <UserImg width={40} height={40} />
        <Box>
          <Typography>username</Typography>
          <Typography color="#888">Name</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle2">Suggested for you</Typography>
    </Box>
  );
}

export default RightSidebar;
