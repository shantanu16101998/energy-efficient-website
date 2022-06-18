import logo from './logo.svg';
import './App.css';


import HomepageFriendy from './components/EnvironmentFriendly/Homepage';
import NewsPageFriendly from './components/EnvironmentFriendly/NewsPage';

import Homepage from './components/EnvironmentUnfriendly/Homepage';
import NewsPage from './components/EnvironmentUnfriendly/NewsPage';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { stockNews,bondNews,goldNews,oilNews } from './components/EnvironmentFriendly/News.js';
import Example from './components/EnvironmentUnfriendly/Carousel';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/stock" element={<NewsPage title={stockNews.title} description={stockNews.description} image={stockNews.image} />} />
          <Route path="/bond" element={<NewsPage title={bondNews.title} description={bondNews.description} image={bondNews.image} />}  />
          <Route path="/gold" element={<NewsPage title={goldNews.title} description={goldNews.description} image={goldNews.image} />}  />
          <Route path="/oil" element={<NewsPage title={oilNews.title} description={oilNews.description} image={oilNews.image} />}  />
          <Route path="/friendly/" element={<HomepageFriendy />} />
          <Route path="friendly/stock" element={<NewsPageFriendly title={stockNews.title} description={stockNews.description} image={stockNews.image} />} />
          <Route path="friendly/bond" element={<NewsPageFriendly title={bondNews.title} description={bondNews.description} image={bondNews.image} />}  />
          <Route path="friendly/gold" element={<NewsPageFriendly title={goldNews.title} description={goldNews.description} image={goldNews.image} />}  />
          <Route path="friendly/oil" element={<NewsPageFriendly title={oilNews.title} description={oilNews.description} image={oilNews.image} />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
