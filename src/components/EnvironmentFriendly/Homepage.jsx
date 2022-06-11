import React from "react";
import { Typography } from "@mui/material";
import "./Homepage.scss";
import NewsCard from "./NewsCard";
import stock from "./images/stock.jpeg";
import bond from './images/bond.jpeg';
import oil from './images/oil.webp';
import gold from './images/gold.jpeg'

function Homepage() {
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
            url='/stock'
            />
          <NewsCard 
            title={'Bond Market'}
            description={'see the latest news about the bond market'}
            image={bond}
            url='/bond'
          />
          <NewsCard 
            title={'Gold Market'}
            description={'see the latest news about the gold market'}
            image={gold}
            url='/gold'
          />
          <NewsCard 
            title={'Oil Market'}
            description={'see the latest news about the oil market'}
            image={oil}
            url='/oil'
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
