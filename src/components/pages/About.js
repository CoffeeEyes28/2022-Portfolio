import React from 'react'

import styled from 'styled-components'



export default function About(){




return(
<Wrapper>
<Title>About Me</Title>
<Text>Full Stack Web Developer with a background in customer service and team management. Fast learner and resilient in the face of any challenge.</Text>
</Wrapper>
)

}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const Title = styled.h3`
font-size: 2em;

`
const Text = styled.p`
font-size: 1.6em;
`