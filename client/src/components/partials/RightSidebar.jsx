import { Box, Typography } from "@mui/material";
import { FlexBetween } from "./Flexbetween";
import ProfileSuggestion from "./ProfileSuggestion";

function RightSidebar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pr: 2 }}>
      <ProfileSuggestion mt={4} mb={4} btnText="Switch" />
      <FlexBetween sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Suggested for you</Typography>
        <Typography
          variant="subtitle2"
          color="#111"
          sx={{ cursor: "pointer", ":hover": { color: "#666" } }}
        >
          See All
        </Typography>
      </FlexBetween>
      <ProfileSuggestion />
      <ProfileSuggestion />
      <ProfileSuggestion />
      <ProfileSuggestion />
    </Box>
  );
}

export default RightSidebar;
