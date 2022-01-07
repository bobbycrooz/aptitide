import React from "react";
import Msg, { Call, Video, Dash, Bell, Map } from "../../asset/icons";
import imgs from "../../asset/images";
import Button from "../../components/button";
import Typewriter from "typewriter-effect";

import styled from "styled-components";

const Index = () => {
  // get scroll direction

  return (
    <Hero className=" h-auto  bg-white w-full flex flex-col justify-between items-center  py-2">
      <div className="hero-box space-y-6 w-full   py-6 h-auto">
        <h1 className="hero-box-auto-type text-3xl   lg:text-6xl md:text-5xl font-semibold">
          <Typewriter
            options={{
              strings: [
                "Consult Healthcare professionals",
                "Purchase Prescribed Drugs.",
                "All in one App.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="hero-box-content text-center  w-full  mx-auto mt-5 md:mt-1 ">
          Get connected with highly experienced medical health care
          <br />
          practitioners at your own time. No waits, no commuting delays.
          <br />
          Professionals anywhere,anytime <br />
          <b>How easy can that be!</b>
        </p>

        <div className="hero-box-btn-cont  mx-auto flex flex-col md:flex-row  md:justify-between space-y-5 md:space-y-0">
          <Button text="dowload now" />

          <Button text="explore features" />
        </div>
      </div>
      {/**/}
      <div className="tri-icon hidden   relative w-full h-48 xl:flex">
        <div className="tri-icon-v absolute">
          <Video />
        </div>
        <div className="tri-icon-m absolute">
          <Msg />
        </div>
        <div className="tri-icon-c absolute">
          <Call />
        </div>

        <img src={imgs.dottedA} alt="" className=" tri-icon-line1 absolute" />
        <img src={imgs.dottedB} alt="" className="tri-icon-line2 absolute" />

        <div className="vector absolute w-1/2   h-auto mt-6">
          <div className="relative w-full h-full">
            <img src={imgs.redring} alt="" className="ring-red absolute" />
            <img
              src={imgs.orangeCard}
              alt=""
              className="orange-card absolute"
            />
          </div>
        </div>
      </div>
      {/**/}
      <section className="section2   w-full flex flex-col md:flex-row h-auto  justify-center items-start lg:items-center relative p-11">
        <img src={imgs.dottedD} alt="" className="hidden xl:block dottedD" />

        <img src={imgs.phoneA} alt="" className=" w-1/3  phonea md:mx-16" />

        <div className="list-details  w-full text-center  md:text-left">
          <div className="my-14 lg:my-20 card-one w-11/12  p-2 space-y-4 flex flex-col items-center md:block">
            <span className="icon ">
              <Dash />
            </span>
            <h1 className="font-semibold md:text-2xl text-xl ">
              Thousands of specialists at your disposal
            </h1>

            <p className="font-meddium ">
              At Medoncall, we ensure that the best of practitioners attend to
              your request providing the highest quality of medical services for
              a quick and seamless recovery.
            </p>
          </div>
          {/**/}

          <div
            className="w-11/12 
flex flex-col items-center md:block my-14 lg:my-20 card-one  p-2 space-y-4"
          >
            <span className="icon">
              <Bell />
            </span>
            <h1 className="font-semibold md:text-2xl text-xl">
              Thousands of specialists at your disposal
            </h1>

            <p className=" font-meddium ">
              At Medoncall, we ensure that the best of practitioners attend to
              your request providing the highest quality of medical services for
              a quick and seamless recovery.
            </p>
          </div>
          {/**/}

          <div
            className="w-11/12 
flex flex-col items-center md:block my-14 lg:my-20 card-one  p-2 space-y-4"
          >
            <span className="icon">
              <Map />
            </span>

            <h1 className="font-semibold md:text-2xl text-xl ">
              Thousands of specialists at your disposal
            </h1>

            <p className=" font-meddium ">
              At Medoncall, we ensure that the best of practitioners attend to
              your request providing the highest quality of medical services for
              a quick and seamless recovery.
            </p>
          </div>
        </div>
      </section>
    </Hero>
  );
};

const Hero = styled.button`
  margin-top: 140px;
  transition: 0.5s;
  
  

  .hero-box {
    line-height: 30px;
    /* height: 500px; */

    &-content {
      width: 100%;
    }

    &-btn-cont {
      width: 450px;
      @media screen and (max-width: 780px) {
        width: 250px;
      }
    }
  }

  .tri-icon {
    /* height: 300px; */
    &-v {
      left: 17%;
      top: -250px;
    }

    &-m {
      right: 20%;
      top: -200px;
    }

    &-c {
      right: 45%;
      bottom: -0px;
    }

    &-line1 {
      left: 21%;
      top: -200px;
      width: 30%;
    }

    &-line2 {
      right: 25%;
      top: -80%;
      width: 18%;
    }
    .vector {
      /* border: 1px solid #fa3d3d; */
      height: 700px;
      top: 40%;
      .orange-card {
      }

      .ring-red {
        left: 35%;
        top: 24%;
      }
    }
  }

  section {
    margin-top: 500px;
    /* background-image: linear-gradient(radial, #000, #fff); */
    /* background:#0005; */

    .dottedD {
      margin-top: 200px;
    }
    .phonea {
      width: 400px;
    }
    .list-details {
      width: 530px;
      margin-top: -400px;
    }
    @media screen and (max-width: 1037px) {
      margin-top: 100px;
      /* padding: 1.75rem; */

      .phonea {
        width: 350px;
      }
      .list-details {
        width: 100%;
        margin-top: auto;
      }
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
