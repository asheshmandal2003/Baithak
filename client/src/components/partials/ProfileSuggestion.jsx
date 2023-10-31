import { Box, Typography } from "@mui/material";
import UserImg from "./UserImg";
import { FlexBetween } from "./Flexbetween";

function ProfileSuggestion({ mb = 1, mt = 0, btnText = "Follow" }) {
  return (
    <FlexBetween sx={{ mt, mb }}>
      <FlexBetween sx={{ gap: 2 }}>
        <UserImg />
        <Box>
          <Typography variant="subtitle1">username</Typography>
          <Typography variant="subtitle2">name</Typography>
        </Box>
      </FlexBetween>
      <Typography
        variant="subtitle2"
        color="#2196f3"
        sx={{ cursor: "pointer", ":hover": { color: "#1769aa" } }}
      >
        {btnText}
      </Typography>
    </FlexBetween>
  );
}

export default ProfileSuggestion;
