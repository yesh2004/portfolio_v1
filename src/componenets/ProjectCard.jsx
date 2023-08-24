import React from 'react'

const ProjectCard = ({title,img,desc,link}) => {
  return (
    <div class="card">

                <div class="image">
                   <img src={img}/>
                </div>
                <div class="title">
                 <h1>{title}</h1>
                </div>
                <div class="des">
                 <p>{desc}</p>
                <button><a href={link}>GitHub</a></button>
                </div>
            </div>
  )
}

export default ProjectCard