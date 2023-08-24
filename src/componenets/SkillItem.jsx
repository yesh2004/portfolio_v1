import React from 'react'

const SkillItem = ({title,img}) => {

  return (
    <div class="skill_item">
                {img}
                <h2 class="skill_title">{title}</h2>
            </div>
  )
}

export default SkillItem