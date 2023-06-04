import React, { useRef, useState } from 'react'
import Cards from '../components/Cards'
import DetailSidebar from '../components/DetailSidebar'
import CardsSet from '../components/CardsSet'

const SkillsPage = () => {

  return (
    <div className='skill_details'>
            <DetailSidebar title="Navigation" />
            <CardsSet />        
    </div>
  )
}

export default SkillsPage