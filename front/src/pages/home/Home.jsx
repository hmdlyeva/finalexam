import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/homepages/hero/Hero";
import Menu from "../../components/homepages/menu/Menu";
import { Helmet } from "react-helmet";
import Bestsel from "../../components/homepages/bestsell/Bestsel";
import Subs from "../../components/homepages/subscribe/Subs";
import Footer from "../../components/homepages/footer/Footer";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Hero />
      <Menu />
      <Bestsel/>
      <Subs/>
      <Footer/>
    </>
  );
};

export default Home;
