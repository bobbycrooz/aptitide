import React from "react";
import { Tw,Fb,Ig } from "../../asset/icons";
import imgs from "../../asset/images";

import styled from "styled-components";

const Index = () => {
  return (
    <Hero className=" h-auto w-full">
      <div className="app_store w-full flex justify-between items-end relative mt-11 md:mt-2">
        <img src={imgs.rec2} alt="" className="w-full  invisible lg:visible" />
        <div className="content absolute ">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold">
            Get it on App Store
          </h1>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-1 justify-center mt-8">
            <img src={imgs.gplay} alt="" />
            <img src={imgs.apple} alt="" />
          </div>
        </div>
      </div>
      <footer className="py-9 w-full h-auto">
        <div className="flex justify-between  ">
          <div className="logo-box-section text-white ml-11">
            {/**/}
            <div className="nav_logo ">
              <h1 className="nav_logo-name font-bold text-pri-1 text-3xl  ">
                MedonCall
              </h1>
              <div className="nav_logo-dot-continer flex space-x-2 justify-center">
                <img src={imgs.elipse} alt="" />
                <img src={imgs.elipse} alt="" />
                <img src={imgs.elipse} alt="" />
              </div>
            </div>
            {/**/}
            <div className="adress text-left px-6 mt-4">
              <h1>
                Address: Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Non arcu condimentum sed id tempus magnis amet, sagittis
                <br />
                semper. Email Address:info@medoncall.com
              </h1>
            </div>
            {/**/}
          </div>
          {/**/}
          {/**/}
          <div className="f-nav  flex  w-1/2 justify-around">
            <div className="comapany text-white text-left">
              <h1 className="font-bold">COMPANY</h1>
              <ul className="capitalize mt-2">
                <li>pricing</li>
                <li>about us</li>
                <li>privacy and policy</li>
                <li>terms of use</li>
              </ul>
            </div>
            {/**/}
            {/**/}

            <div className="comapany text-white text-left">
              <h1 className="font-bold">COMPANY</h1>
              <ul className="capitalize mt-2">
                <li>drug store</li>
                <li>book consultations</li>
              </ul>
            </div>
            {/**/}
            {/**/}

            <div className="comapany text-white text-left">
              <h1 className="font-bold">HELP</h1>
              <ul className="capitalize mt-2">
                <li>frequently asked questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="last-el w-full flex py-4 justify-around text-white mt-11">
          <h1>(c)Copy 2021 | All Rights Reserved | Medoncall</h1>

          <h1>Made with ❤️ by dev_bee Technologies</h1>

          <div className="icon-box flex  space-x-8">
            <Fb />
            <Tw />
            <Ig />
          </div>
        </div>
      </footer>
    </Hero>
  );
};

const Hero = styled.button`
  transition: 0.5s;
  margin-top: 100px;

  .app_store {
    .content {
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
    }
  }

  footer {
    background: #181f23;
    
    .logo-box-section{
    width: 300px;
    }
  }

  /* animmations */
  @keyframes animate-a {
    0% {
    }
    100% {
    }
  }
  /* animmations */

  /* small screen responsiveness */
  @media screen and (max-width: 780px) {
  }
  @media screen and (max-width: 480px) {
  }
  /* small screen responsiveness */
`;

export default Index;
