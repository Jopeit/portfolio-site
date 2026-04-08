import React from 'react'
import HomeSection from './components/HomeSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'


export default function App() {
  return (
    <div className="container">
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}