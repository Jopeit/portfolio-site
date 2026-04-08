import React from "react";

export default function ProjectCard({title,info,image}){
    return(
        <div className="project-card">
                <h4>{title}</h4>
                <ul>
                    {info.map((item,i) =>(
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <button> More </button>
            
        </div>
    )
}