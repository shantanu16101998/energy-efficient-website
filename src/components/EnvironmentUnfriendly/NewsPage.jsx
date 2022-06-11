import React from "react";
import { Typography } from "@mui/material";

function NewsPage({ title, description, image }) {
  return (
    <>
      <div className="header">
        <Typography variant="h4">Latest News Of Financial Times</Typography>
      </div>
      <div className="container">
        
        <div className="container-body">
          <Typography
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            {title}
          </Typography>
          <img src={image} alt="" height={300} width={1000}/>
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Roboto",
            }}
          >
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
