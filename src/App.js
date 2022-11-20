import React from 'react';
import Display from './components/Display'
import background from './Assets/Images/background1.jpg'
import styled from 'styled-components'

function App (){
    return( 
        <Container>
         <Display />
        </Container>
        
    );
}


const Container = styled.div`
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
`

export default App;