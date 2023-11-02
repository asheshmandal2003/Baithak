import { Fade, Paper, Popper, Typography } from "@mui/material";

function More({ anchorEl, open }) {
  return (
    <Popper open={open} anchorEl={anchorEl} placement="top-start" transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Typography p={2}>Hello</Typography>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

export default More;
