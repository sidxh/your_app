import React from 'react'
import DetailSidebar from '../components/DetailSidebar'
import jobRequirement from './JobSkillsData'
import JobCard from '../components/JobCard'
import Cards from '../components/Cards'

const specificData = {
    'name' : 'Utkarsh',
    'skill': 'Python',
    'skillset': '{}',
    'experience': '',
    'rollno': '2435843',
    'linkedin': 'Utkarsh Mhatre',
    'email' : 'utkarshmhatre.7777@gmail.com',
}


const JobPage = () => {

  return (
    <div className='skill_details'>
            <div className='cards_set_head'>
                <div className='cards_set'>
                <Cards 
                name={specificData.name}
                skill={specificData.skill}
                skillset={specificData.skillset}
                experience={specificData.experience}
                achievement={specificData.achievement}
                rollno={specificData.rollno}
                linkedin={specificData.linkedin}
                email={specificData.email}
                />
                {/*
                company 
                position 
                salaryRange
                    min 
                    max
                jobtype // full time or intership
                location 
                */}
                <JobCard
  jobTitle="Software Engineer"
  company="Tech Company"
  jobDescription="We are looking for a software engineer to join our team..."
  jobRequirements={[
    'Bachelor\'s degree in Computer Science',
    '3+ years of experience in software development',
    'Proficiency in React and Node.js',
  ]}
  applyLink="https://example.com/apply"
/>

                {jobRequirement.map((jobDataList, index) => (
                    <>
                        
                    </>        
            ))}
  
                </div>
            </div>
    </div>
  )
}

export default JobPage
