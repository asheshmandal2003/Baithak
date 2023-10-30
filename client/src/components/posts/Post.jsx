import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { MoreVertOutlined } from "@mui/icons-material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import UserImg from "../partials/UserImg";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";

function Post() {
  const [like, setLike] = useState(false);
  const likePost = () => {
    setLike(!like);
  };
  return (
    <Card sx={{ width: 462, ml: 4 }}>
      <CardHeader
        avatar={<UserImg height={35} width={35} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined color="#000" />
          </IconButton>
        }
        title="username"
        subheader="just now"
      />
      <CardMedia
        component="img"
        height="auto"
        image="/images/img1.jpg"
        loading="lazy"
      />
      <CardActions disableSpacing>
        <IconButton onClick={likePost} aria-label="like">
          {!like ? (
            <FavoriteBorderRoundedIcon sx={{ fontSize: 30 }} />
          ) : (
            <FavoriteOutlinedIcon sx={{ fontSize: 30, color: "red" }} />
          )}
        </IconButton>
        <IconButton aria-label="comment-box">
          <InsertCommentOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton aria-label="comment-box">
          <ShareOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </CardActions>
      <CardContent>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography color="#000">username</Typography>
          <Typography color="#666">Shubho Bijoya❤️</Typography>
        </Box>

        <Typography variant="subtitle1" color="#999" my={1}>
          View all 100 comments
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography color="#000">username</Typography>
          <Typography color="#666">Shubho Bijoya🌸❤️</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography color="#000">username</Typography>
          <Typography color="#666">Shubho Bijoya🙏🏾❤️</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Post;
