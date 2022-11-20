import React from "react";
import resumeDoc from '../../Assets/Gregory-Johnston-Resume-2022.pdf'

export default function Resume(){




    return(
        <div>
            <h3>Check Out My Resume Here:</h3>
            <br></br>
            <a href="https://docs.google.com/document/d/1sb-WsxVi4RD0V18Mvxnj8yj62YUcPLmhS3dmJ9BneNk/edit?usp=sharing" target="_blank">Visit</a>
            <br></br>
            <br></br>
            <a href={resumeDoc} download='Gregory-Johnston-Resume.pdf'><button>Download</button></a>
        </div>
    )
}