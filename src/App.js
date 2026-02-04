
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopNoticeBar from './components/TopNoticeBar';
import OfferCarousel from './components/OfferCarousel';
import FindBySpecialisation from './components/FindBySpecialisation';
import OurMedicalSpecialist from './components/OurMedicalSpecialist';
import PatientCaring from './components/PatientCaring';
import LatestNews from './components/LatestNews';
import OurFamilies from './components/OurFamilies';
import FAQSection from './components/FAQSection';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNoticeBar/>
  <Navbar />
  <Hero />
  <OfferCarousel/>
  <FindBySpecialisation/>
  <OurMedicalSpecialist/>
  <PatientCaring/>
  <LatestNews/>
  <OurFamilies/>
  <FAQSection/>
  <DownloadApp/>
  <Footer/>
    </div>
  );
}

export default App;
