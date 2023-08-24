import React from 'react'
import ProjectCard from './ProjectCard'
import Hulu from '../assets/hulu_ui.jpeg'
import netflix from '../assets/Netflix.png'
import insta from '../assets/instagram.png'
import street from '../assets/StreetFighter.png'
const Projects = () => {
  const projects=[
    {
      title:"Netflix UI",
      desc:"I made netflix ui using ReactJS",
      img:netflix,
      link:"https://github.com/yesh2004/netflix-ui"
    },
    {
      title:"HULU UI",
      desc:"I made netflix ui using ReactJS",
      img:Hulu,
      link:"https://github.com/yesh2004/hulu-ui-clone"
    },
    {
      title:"Instagram clone",
      desc:"I made simplier version of instagram using bootstrap and django",
      img:insta,
      link:"https://github.com/yesh2004/django-instagram-clone"
    },
    {
      title:"Street Fighter",
      desc:"I made a street fighter like game using Python and PyGame",
      img:street,
      link:"https://github.com/yesh2004/Brawler"
    }
  ]
  return (
    <section class="projects" id="projects">
        <h1 class="text">Projects:</h1>
        <div class="project">
           {
            projects.map((project)=>(
              <ProjectCard title={project.title} img={project.img} desc={project.desc} link={project.link} />
            ))
           }
           
        </div>
        
    </section>
  )
}

export default Projects