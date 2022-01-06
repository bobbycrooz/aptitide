import React from "react";
import Msg, { Call, Video, Dash, Bell, Map } from "../../asset/icons";
import imgs from "../../asset/images";
import { useScroll } from "../../hooks/useScroll";
import Button from '../../components/button'
import styled from 'styled-components'


const Index = () => {


  // get scroll direction
 

  
  

  return (
    <Hero className=" h-auto border bg-white w-full flex justify-between items-center  py-3">

    </Hero>
  );
};

const Hero = styled.button`

    transition: .5s;


 
/* animmations */
@keyframes animate-a {
0%{}
100%{}
}
/* animmations */

/* small screen responsiveness */
@media screen and (max-width:780px){}
@media screen and (max-width:480px){}
/* small screen responsiveness */
`


export default Index;
