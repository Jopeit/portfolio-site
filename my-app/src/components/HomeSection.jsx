import React from "react";
import Navigation from "./Navigation";


export default function HomeSection(){
    return(
        <section id="home">
            <div className="background-image"></div>
                <Navigation/>
                <div className="info">
                    <h1>Vladzio Bonn</h1>
                    <div className="row-block">
                        <p>04.10.2008</p>
                        <p>Katowice</p>
                    </div>
                    <div className="bottom-info">
                        <p id="aboutme">I am a junior frontend developer currently studying programming at ZSTiO2 technical college. I am focused on learning modern web technologies such as React and improving my practical skills by building projects.
                     I am motivated to grow as a developer and ready to work in a team environment.</p>
                        <p className="citats">~`I am Vengeance`</p>
                </div>
            </div>
        </section>
    )
}