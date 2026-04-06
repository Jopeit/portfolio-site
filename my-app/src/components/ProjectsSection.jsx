import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/database.js";

export default function ProjectsSection(){
    return(
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((proj,i) =>{
                    return <ProjectCard key={i} {...proj}/>
                })}
            </div>
        </section>
    )
}