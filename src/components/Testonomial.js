import React from 'react'
import TestCard from './TestCard'

const Testonomial = () => {
  return (
    <div className='my-10'>
        
        <TestCard
        
        imageSrc="/tes1.jpg" 
          name="Rachel Adams"
          role="Regular Clients"
          rating={5}
          testimonial="We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
        
        />


    </div>
  )
}

export default Testonomial