import React from 'react'
import DonutChart from './DonutChart'
import { langmassinve,itlangmassive } from "../data/database.js";

export default function SkillsSection() {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="chart-line">
        <DonutChart data={langmassinve} />
        <DonutChart data={itlangmassive} />
      </div>
    </section>
  )
}