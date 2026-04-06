import React from "react";

export default function SkillsSection(){
    return(
        <section id="skills">
            <h1>Skills</h1>
            <div className="chart-line">
                <div class="donutbox">
                    <canvas id="langChart" width="400" height="350"></canvas>
                </div>
                <div class="donutbox">
                    <canvas id="itlangChart" width="400" height="350"></canvas>
                </div>
            </div>
        </section>
    )
}