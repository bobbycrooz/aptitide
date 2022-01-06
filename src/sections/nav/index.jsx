import React from "react";
import imgs from "../../asset/images";
import { useScroll } from "../../hooks/useScroll";
import Button from "../../components/button";
import styled from "styled-components";

const Index = () => {
  const [direction, setDirection] = React.useState(null);
  const [toggleNav, setToggleNav] = React.useState(null);

  // get scroll direction
  useScroll((dir) => setDirection(dir));

  // toggle class on scrool

  function toggleNavClass() {
    const navElement = document.getElementById("nav");
    if (!toggleNav) {
      navElement.classList.add("active");
    } else {
      navElement.classList.remove("active");
    }
  }

  React.useEffect(() => {
    setToggleNav(
      direction === "down" ? false : direction === "up" ? true : true
    );
  }, [direction]);
  
    React.useEffect(() => {
      toggleNavClass();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [direction]);

  return (
    <Nav
      id="nav"
      className="active h-auto border bg-white w-full flex justify-between items-center  py-3"
    >
      <div className="nav_logo ml-28   ">
        <h1 className="nav_logo-name font-bold text-pri-1 text-3xl  ">
          MedonCall
        </h1>
        <div className="nav_logo-dot-continer flex space-x-2 justify-center">
          <img src={imgs.elipse} alt="" />
          <img src={imgs.elipse} alt="" />
          <img src={imgs.elipse} alt="" />
        </div>
      </div>
      <div className="nav_links  flex space-x-5 mr-28 ">
        <div className="nav_links-item feature  p-4 text-lg capitalize hover:text-gray-600 relative flex">
          feature <img src={imgs.caret} className="ml-2" alt="" />{" "}
          <div className="absolute dropdown invisible bg-white  p-2  border-2 rounded-b-xl">
            <ul className="space-y-3 font-semibold">
              <li>book consultations</li>
              <li>drug store</li>
            </ul>
          </div>
        </div>
        <div className="nav_links-item   p-4 text-lg uppercase">faq</div>
        <div className="nav_links-item   p-4 text-lg capitalize">contract</div>
        <Button text="get it now" />
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: -100px;
  left: 0;
  transition: 0.5s;

  z-index: 99;
  .nav_links {
    &-item {
      &.feature {
        .dropdown {
          width: 250px;
          height: 100px;
          bottom: -150px;
          left: -80px;
          opacity: 0;

          li {
            margin-top: 25px;
          }
        }

        &:hover {
          .dropdown {
            visibility: visible;
            bottom: -100px;
            transition: 0.5s;
            opacity: 1;

            li {
              transition: 0.5s;

              margin-top: 10px;
            }
          }
        }
      }
    }
  }

  &.active {
    top: 0px;
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
