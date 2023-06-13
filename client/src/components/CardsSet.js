import React from 'react'
import Cards from './Cards'
import { useParams } from 'react-router-dom'
import SkillsData from '../pages/SkillsData'

const CardsSet = () => {

  const { category, skill } = useParams();

const skillData = SkillsData.filter(
    (skillData) =>
      skillData.category.toLowerCase() === category.toLowerCase() &&
      skillData.skill.toLowerCase() === skill.toLowerCase()
  );

  if (skillData.length === 0) {
    // Handle case when skill data is not found
    return (
      <div className='not-found'>
            <img id='no-data-img' src={require('../images/no-data.png')} />
            <h1>No Data Yet</h1>
            <p>We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains! </p>

      </div>
    )
    
    
    
;
  }

  const firstSkill = skillData[0];

  return (
<div className='cards_set_head'>
        <h1>{firstSkill.skill}</h1>
        <div className='cards_set'>
        {skillData.map((skillData, index) => (
            <>
                <Cards 
                name={skillData.name}
                technicalSkillset={skillData.technicalSkillset}
                experience={skillData.experience}
                achievement={skillData.achievement}
                linkedin={skillData.linkedin}
                />

            </>        
      ))}
            
        </div>
    </div>
  )
}

export default CardsSet