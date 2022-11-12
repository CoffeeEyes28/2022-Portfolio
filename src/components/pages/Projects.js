import React from 'react';

import { projects } from '../../data';



export default function Projects(){



    return(
        <div>
            
            {projects.map((project) => (
                
                <a href={project.link} key={project.image}>
                    <div>
                    <img src={project.image}/>
                    </div>
                    <div>
                        <h1>{project.title}</h1>
                    </div>
                    <div>
                        <p>{project.description}</p>
                    </div>
                 </a>
               
        



            ))}



        </div>
    )
}