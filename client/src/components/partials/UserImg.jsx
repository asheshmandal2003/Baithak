import { Avatar } from "@mui/material";

function UserImg({ height, width }) {
  return (
    <Avatar src="/broken-image.jpg" sx={{ height: height, width: width }} />
  );
}

export default UserImg;
