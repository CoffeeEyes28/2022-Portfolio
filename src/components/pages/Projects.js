import React, {useState} from 'react';

import { projects } from '../../data';

import styled from 'styled-components';

export default function Projects(){

const [hover, setHover] = useState(false);

const [addHover, setAddHover] = useState(

    {
        hover:''
    }
)

const hoverProp = (props) => {



    
}

const handleSrc = (project, id) => {
 if(project.id === id && hover && project.animated){
    return project.animated
 }
 return project.image


}

    return(
        <Wrapper>
            
            <div>
                <Title>Projects</Title>
            </div>
            <br></br>
            <br></br>
            <br></br>
           
            {projects.map((project, id) => (
            <div key={project.id} >
                <div>
                <h1>{project.title}</h1>
                </div>
                <br></br>
                <a href={project.link}>

                    
                    <img 
                    onMouseOver={project.animated ? () => setHover(true) : () => setHover(false)}
                    onMouseOut={ () => setHover(false)}
                    src={handleSrc(project, project.id)} 
                    width='600px' height='600px'
                    />
                    
                    </a>
                    <br></br>
                    <div>
                        <p>{project.description}</p>
                    </div>
                
               
        


            </div>
           
            ))}



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
