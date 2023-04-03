import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "./../components/Footer";
import Main from "../components/Main";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
