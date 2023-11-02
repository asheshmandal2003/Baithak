import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import LeftSideIconBar from "./LeftSideIconBar";

function NotificationsDrawer({ open, setOpen }) {
  return (
    <Drawer open={open}>
      <Box sx={{ display: "flex" }}>
        <LeftSideIconBar open={open} setOpen={setOpen} />
        <Box width={400}>
          <Stack spacing={2} p={4}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Notifications
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              This Week
            </Typography>
          </Stack>
          <Divider />
          <Box
            width="100%"
            height="60vh"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" color="#999">
              No recent notifications
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default NotificationsDrawer;
