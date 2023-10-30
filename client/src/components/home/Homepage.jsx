import { Grid } from "@mui/material";
import Sidebar from "../partials/Sidebar";
import RightSidebar from "../partials/RightSidebar";
import Feed from "../feed/Feed";

function Homepage() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={6}>
        <Feed />
      </Grid>
      <Grid item xs={3}>
        <RightSidebar />
      </Grid>
    </Grid>
  );
}

export default Homepage;
