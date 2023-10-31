import {
  Box,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import LeftSideIconBar from "./LeftSideIconBar";
import { SearchRounded } from "@mui/icons-material";

function SearchDrawer({ open, setOpen }) {
  return (
    <Drawer open={open}>
      <Box sx={{ display: "flex" }}>
        <LeftSideIconBar open={open} setOpen={setOpen} />
        <Box width={400}>
          <Box sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={600}>
                Search
              </Typography>
              <FormControl variant="outlined">
                <InputLabel htmlFor="search">Search</InputLabel>
                <OutlinedInput
                  id="search"
                  label="Search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchRounded />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>
          </Box>
          <Divider />
          <Box p={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Recent
            </Typography>
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
                No recent searches
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SearchDrawer;
