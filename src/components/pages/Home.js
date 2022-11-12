import React from 'react'
import styled from 'styled-components'

import self from '../../Assets/Images/self.jpg'



export default function Home(){


return(
    <Wrapper>
          <Title>Hello, I'm Greg</Title>
          <br></br>
        <Self src={self}/>

    </Wrapper>
      
    
    
 
)

}

const Wrapper = styled.div`
text-align: center
`
const Title = styled.h2`
font-size: 4em;

`


const Self = styled.img`

width: 600px;
height: 600px;
border-radius: 50%

`

