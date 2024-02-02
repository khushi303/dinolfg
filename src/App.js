import './App.css';
import Header from './components/Header';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Timeline from './components/Timeline';
import Faq from './components/Faq';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import BackToTop from './assets/images/webp/upppparrr.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loader from './components/Loader';

function App() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });
  // -----------pre-loader-----------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {screenLoading ? (
        <>
          <div className='fixed min-h-screen bg-[#09655A] top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='max-w-[150px] w-full'>
              <Loader />
            </div>

          </div>

        </>

      ) : (
        <div>
          <Header />
          <About />
          <Tokenomics />
          <Utility />
          <Timeline />
          <Faq />
          <Footer />
          <div className='fixed bottom-4 right-4 z_20 cursor-pointer'>
            <div className={`${backToTop ? '' : 'hidden'} fixed rounded-[18px] border-[#fff] border  border-solid bg-[#0a9300] bottom-[4%] right-[2%] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] cursor-pointer animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center`} onClick={() => top()}>
              <img src={BackToTop} alt="Backtotop" className='w-full rounded-[8.6px] max-w-[30px]' />
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
