import React from "react";
import Navbar from "../sections/nav";
import Hero from "../sections/hero";
import Do from "../sections/do";
import Footer from "../sections/footer";
// default landing page for the task
const Home = () => {
  return (
    <div className="px-20">
      <Navbar />
      <Hero />
      <Do />
      <Footer />
    </div>
  );
};

export default Home;
