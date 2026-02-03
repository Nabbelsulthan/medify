
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopNoticeBar from './components/TopNoticeBar';
import OfferCarousel from './components/OfferCarousel';

function App() {
  return (
    <div className="App">
      <TopNoticeBar/>
  <Navbar />
  <Hero />
  <OfferCarousel/>
    </div>
  );
}

export default App;
