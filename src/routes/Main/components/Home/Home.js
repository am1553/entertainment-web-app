import React from 'react'
import Recommended from './components/Recommended/Recommended'
import Trending from './components/Trending/Trending'

function Home() {
  return (
    <div className='main_page__home' >
        <Trending />
        <Recommended />
    </div>
  )
}

export default Home