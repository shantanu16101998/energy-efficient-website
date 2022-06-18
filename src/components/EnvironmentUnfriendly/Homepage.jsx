import React from "react";
import { Typography } from "@mui/material";
import "./Homepage.scss";
import NewsCard from "./NewsCard";

function Homepage() {
  return (
    <>
      <div className="unfriendly-header">
        <Typography variant="h4">Latest News Of Financial Times</Typography>
      </div>
      <div className="unfriendly-container">
        <div className="unfriendly-container-header">
          
        </div>
        <div className="unfriendly-container-body">
          <NewsCard 
            title={'Stock Market'}
            description={'see the latest news about the stock market'}
            image={"https://media.istockphoto.com/photos/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-picture-id1322201350?b=1&k=20&m=1322201350&s=170667a&w=0&h=Cp62gZiaccwtTOwzFsdUnvyDq8JC91WMloyqfjtTx-U="}
            url='/stock'
            />
          <NewsCard 
            title={'Bond Market'}
            description={'see the latest news about the bond market'}
            image={"https://www.ledgerinsights.com/wp-content/uploads/2018/07/corporate-bonds-810x429.jpg"}
            url='/bond'
          />
          <NewsCard 
            title={'Gold Market'}
            description={'see the latest news about the gold market'}
            image={"https://imageio.forbes.com/specials-images/imageserve/5fe34e4bab90e026e7351c5d/Gold-bar--ingots-and-coins-on-financial--report--Growth-of-gold-on-stock-market/960x0.jpg?format=jpg&width=960"}
            url='/gold'
          />
          <NewsCard 
            title={'Oil Market'}
            description={'see the latest news about the oil market'}
            image={"https://img.etimg.com/thumb/width-1200,height-900,imgsize-51212,resizemode-1,msid-88940612/markets/commodities/news/physical-crude-oil-market-steams-ahead-after-omicron-blip.jpg"}
            url='/oil'
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
