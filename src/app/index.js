import React from "react";
import Navbar from "../sections/nav";
import Hero from "../sections/hero";
import Do from "../sections/do";
import Footer from "../sections/footer";
import styled from 'styled-components'
// default landing page for the task
const Home = () => {
  return (
    <LandingPagWrapper className="">
      <div className="main">
        <Navbar />
        <Hero />
        <Do />
        <Footer />
      </div>
    </LandingPagWrapper>
  );
};

const LandingPagWrapper = styled.div`
  padding: 0 9%;
  
  .main{
  
  }

  @media screen and (max-width: 1250px) {
    padding: 0;
  }
  
`;


export default Home;
