import React from "react";
import { Typography } from "@mui/material";
import "./Homepage.scss";
import NewsCard from "./NewsCard";
import stock from "./images/stock.jpeg";
import bond from './images/bond.jpeg';
import oil from './images/oil.webp';
import gold from './images/gold.jpeg'

function HomepageFriendly() {
  return (
    <>
      <div className="header">
        <Typography variant="h4">Latest News Of Financial Times</Typography>
      </div>
      <div className="container">
        <div className="container-header">
          
        </div>
        <div className="container-body">
          <NewsCard 
            title={'Stock Market'}
            description={'see the latest news about the stock market'}
            image={stock}
            url='/friendly/stock'
            />
          <NewsCard 
            title={'Bond Market'}
            description={'see the latest news about the bond market'}
            image={bond}
            url='/friendly/bond'
          />
          <NewsCard 
            title={'Gold Market'}
            description={'see the latest news about the gold market'}
            image={gold}
            url='/friendly/gold'
          />
          <NewsCard 
            title={'Oil Market'}
            description={'see the latest news about the oil market'}
            image={oil}
            url='/friendly/oil'
          />
        </div>
      </div>
    </>
  );
}

export default HomepageFriendly;
