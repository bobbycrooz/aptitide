import React from "react";
import imgs from "../../asset/images";
import Button from "../../components/button";
import styled from "styled-components";

const serviceArr = [1, 1, 1];

const Index = () => {
  return (
    <Hero className="font-pop h-auto  mt-20 w-full  py-16 px-20">
      <h1 className="font-semibold text-6xl ml-20">Do more with MedOnCall</h1>
      <div className="flex w-full justify-center items-center mt-20">
        <div className="services ">
          {serviceArr.map((item) => (
            <Service />
          ))}
        </div>
        <div className="img-2  flex justify-center w-1/2">
          <img src={imgs.phoneB} alt="" className="w-1/2 " />
        </div>
      </div>

      {/* section block 3.......*/}
      <div className="section3 mt-20 h-auto py-20 ">
        <h1 className="font-semibold text-6xl text-left">
          It only gets better...
        </h1>

        {/* the two cards section.......*/}
        <div className="two-cards flex justify-around items-center my-20  ">
          {/**/}

          <div className="card p-8 space-y-5 border border-gray-400 rounded-xl">
            <h1 className="font-semibold text-pri-1 text-2xl leading-6">
              Flexible Health Plan
            </h1>
            <p className="font normal">
              we work within your budget offering you a variety
              <br />
              of packages for you,your family and employees
              <br />
              with the best of services included
            </p>
          </div>
          {/**/}
          <div className="card p-8 space-y-5 border rounded-xl">
            <h1 className="font-semibold text-pri-1 text-2xl">
              Covid compliant practices
            </h1>
            <p className="font normal leading-6">
              Concerned about covid,be rest assured; our doctorsare
              <br /> highly experienced to administer treatment,
              <br />
              taking into all the required preventive measures
              <br />
              when visiting our home.
            </p>
          </div>
          {/**/}
        </div>
      </div>

      {/* section block 3.......*/}
      <div className="three-phones-cont w-full h-auto flex justify-center items-center py-9">
        <img src={imgs.phoneC} alt="" className="phone a" />
        <img src={imgs.left} alt="" className=" l" />

        <img src={imgs.phoneC} alt="" className="phone c" />
        <img src={imgs.right} alt="" className=" r" />
        <img src={imgs.phoneB} alt="" className="phone b" />
      </div>
      <div className="btn w-full flex justify-center mt-3">
        <Button text="Learn more about this" />
      </div>

      {/* section block 4.......*/}
      <div className="section-fo relative w-full ">
        <img src={imgs.trape} alt="" className="w-full" />

        <div className="text-cont text-6xl space-y-5  text-right font-semibold absolute  right-20 top-1/2">
          <p> Pharmacy?You have it on</p>
          <p>the same app?</p>
          <Button text="read more" />
        </div>

        <div className="three-cards items-center  w-full h-auto absolute bottom-0 py-4 flex justify-center">
          <img src={imgs.arrowCurve} alt="" className="mt-20" />
          {/**/}
          <div className=" p-11 flex justify-center items-center  rounded-2xl flex-col bg-white shadow-xl mx-11">
            <div className="p-2 rounded-md bg-pri-2 w-16">
              <img src={imgs.pill} alt="" />
            </div>
            <h1 className="font-semibold text-center leading-10 text-pri-1 text-3xl my-6 ">
              Buy over the
              <br />
              counter
            </h1>
            <p className="text-center font-medium text-xl">
              Buy regular medicine you'd get
              <br />
              from the pharmacist without
              <br />
              necessary prescriptions
            </p>
          </div>
          {/**/}
          <div className=" p-11 rounded-2xl flex justify-center items-center flex-col bg-white shadow-xl">
            <div className="p-2 rounded-md bg-pri-2 w-16">
              <img src={imgs.drugc} alt="" />
            </div>
            <h1 className="font-semibold text-center text-pri-1 text-2xl leading-10 my-6">
              Buy Prescription
              <br />
              Drugs
            </h1>
            <p className="text-center font-medium text-xl">
              Get medicine precribed by your
              <br />
              personal doctor or pharmacist
              <br />
              on Medoncall or anywhere else
            </p>
          </div>
          {/**/}
        </div>
      </div>

      {/* section block 5.......*/}
      <div className="section_5 w-full h-auto p-4 border mt-60">
        <div className="text-left font-semibold text-6xl space-y-7">
          <h1>Stay ahead with the latest </h1>

          <h1> Health News</h1>
        </div>

        <div className="rounded-3xl border mx-auto mt-16   flex">
          <div className="rectangle a rounded-l-3xl"></div>
          <div className="rectangle b">
            <h1 className="text-white font-bold text-4xl">Vaccine</h1>
          </div>
          <div className="rectangle c">
            <h1 className="text-white font-bold text-4xl text-center">
              BREAK <br /> THROUGH
            </h1>
          </div>
          <div className="rectangle d rounded-r-3xl">
            <h1 className="text-white font-bold text-4xl">RESEARCH</h1>
          </div>
        </div>
      </div>
    </Hero>
  );
};

function Service(params) {
  return (
    <div className="service-card  my-11">
      <div className="service-card-tit flex py-4 mb-4">
        <h1 className="font-semibold text-3xl  w-auto">Pick a service</h1>

        <button className="w-14 px-4">
          <img src={imgs.arrow} alt="" className=" " />
        </button>
      </div>

      <p className="service-card-text text-left font-normal text-xl">
        Choose a service to get professsional in specialized fields, whether
        General checkup, Emergency,Body and Nutrition,there is a consultant for
        it
      </p>
    </div>
  );
}

const Hero = styled.section`
  transition: 0.5s;

  .service-card {
    width: 550px;
    &-tit {
      line-height: 37px;
      justify-content: space-between;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: #e9ebeb;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;

        height: 4px;
        width: 0;
        background-color: #fa3d3d;
      }

      &:hover {
        color: #fa3d3d;
        transition: 0.5s;

        &:after {
          transition: 0.5s;

          width: 0%;
        }
        &:before {
          transition: 0.5s;

          width: 100%;
        }
      }
    }
  }

  .three-phones-cont {
    .phone {
      width: 270px;

      &.c {
        width: 300px;
      }

      &.a,
      &.b {
        height: 90%;
      }
    }
  }

  .text-cont {
    top: 40%;
  }
  .three-cards {
    bottom: -30%;
  }

  .section_5 {
  margin-top:400px;
  
    .rectangle {
      width: 30%;
      height: 300px;
      position: relative;
      
      h1{
      position: absolute;
      bottom: 4px;
      right: 35%;
      font-size:39.86px;
      }
      

      &.a {
        background-image: url(${imgs.red});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
      }

      &.b {
        background-image: url(${imgs.black});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        margin-left: -100px;
      }

      &.c {
        background-image: url(${imgs.red2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        margin-left: -100px;
      }

      &.d {
        background-image: url(${imgs.blue});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        margin-left: -100px;
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