import React from 'react'
import Hero from '../../components/homeComponents/heroSec/Hero'
import ForYou from '../../components/homeComponents/ForYou'
import ShowCategories from '../../components/homeComponents/ShowCategories'

function HomePage() {
  return (
    <>
      <div className='container'>
        <Hero />
        <ShowCategories />
        <ForYou />
      </div>
    </>
  )
}

export default HomePage