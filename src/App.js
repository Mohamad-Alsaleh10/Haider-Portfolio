import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import NewsTicker from "./components/NewsTicker";  
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    axios.get('https://back.haidarrazooq.com/api/news')
      .then(response => {
        setNewsItems(response.data.data.map(item => item.body)) // map over the items and get the body of each item
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <NewsTicker news={newsItems} />
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <Banner />
        <Projects />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;