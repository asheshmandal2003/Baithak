import { AppBar, Box, Typography } from "@mui/material";
import UserImg from "../partials/UserImg";

function Story() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2.5,
        mt: 4,
        backgroundColor: "transparent",
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <UserImg height={55} width={55} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Name
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <UserImg height={55} width={55} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Name
        </Typography>
      </Box>
    </Box>
  );
}

export default Story;
