import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NewsCard({ title, description, image, url }) {
  return (
    <Card
      style={{
        width: "400px",
        border: "1px solid #4f4b44",
        marginBottom: "30px"
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent
        style={{
          backgroundColor: "#181a1b",
          color: "#fff",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          backgroundColor: "#181a1b",
          color: "#fff",
        }}
      >
        <Button
          style={{
            marginLeft: "150px",
          }}
          onClick={() => {
            window.location.href = url;
          }}
          size="small"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
