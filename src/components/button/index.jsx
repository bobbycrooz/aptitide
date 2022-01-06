import React from 'react'
import styled from 'styled-components'

const index = ({text,w}) => {
    return (
        <Button className='capitalize font-pop text-xl font-semibold' w={w}>
            {text}  
        </Button>
    )
}

// animation: example 4s linear 3s infinit alternate
// duration, delay

const Button = styled.button`
    padding: 10px 30px;
    background: #fa3d3d;
    border-radius: 5px;
    color: #fff;
    /* font-weight: 500; */
    /* font-size: 16px; */
    cursor: pointer;
    border: 1px solid #fa3d3d;
    transition: .5s;
    /* margin-right: 50px; */
    z-index: 1;
    
    &:hover{
    border: 1px solid #fa3d3d;
    color: #fa3d3d;
    background: #fff;
    
    }

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
export default index
