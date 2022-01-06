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
      <div className="hero-box space-y-6  text-xl">
        <h1 className="hero-box-auto-type text-6xl font-semibold">
          <Typewriter
            options={{
              strings: [
                "All in one App.",
                "Purchase Prescribed Drugs.",
                "Consult Healthcare professionals",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="hero-box-content text-center">
          Get connected with highly experienced medical health care
          <br />
          practitioners at your own time. No waits, no commuting delays.
          <br />
          Professionals anywhere,anytime <br />
          <b>How easy can that be!</b>
        </p>

        <div className="hero-box-btn-cont  mx-auto flex justify-between">
          <Button text="dowload now" />

          <Button text="explore features" />
        </div>
      </div>
      {/**/}
      <div className="tri-icon   relative w-full h-48 flex">
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
      <section className="section2 w-full flex h-auto  p-11 justify-center items-center relative">
        <img src={imgs.dottedD} alt="" className=" dottedD" />
        <img src={imgs.phoneA} alt="" className="w-1/3  phonea mx-16" />

        <div className="list-details  w-full ">
          <div className="my-20 card-one  p-2 space-y-4">
            <span className="icon">
              <Dash />
            </span>
            <h1 className="font-semibold text-2xl text-left">
              Thousands of specialists at your disposal
            </h1>

            <p className="text-left font-meddium text-xl">
              At Medoncall, we ensure that the best of practitioners attend to
              your request providing the highest quality of medical services for
              a quick and seamless recovery.
            </p>
          </div>
          {/**/}

          <div className="my-20 card-one  p-2 space-y-4">
            <span className="icon">
              <Bell />
            </span>
            <h1 className="font-semibold text-2xl text-left">
              Thousands of specialists at your disposal
            </h1>

            <p className="text-left font-meddium text-xl">
              At Medoncall, we ensure that the best of practitioners attend to
              your request providing the highest quality of medical services for
              a quick and seamless recovery.
            </p>
          </div>
          {/**/}

          <div className="my-20 card-one  p-2 space-y-4">
            <span className="icon">
              <Map />
            </span>
            <h1 className="font-semibold text-2xl text-left">
              Thousands of specialists at your disposal
            </h1>

            <p className="text-left font-meddium text-xl">
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

    &-btn-cont {
      width: 450px;
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
      bottom: -60px;
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

    .dottedD{
    
    margin-top:200px;
    
    } .phonea {
      width: 400px;
    }
    .list-details {
      width: 530px;
      margin-top: -400px;
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