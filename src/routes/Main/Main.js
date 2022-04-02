import React from 'react'
import MainHeader from '../../common_components/Main_Header/MainHeader'
import SearchBar from '../../common_components/Main_SearchBar/SearchBar'
import Home from '../Home/Home'

function Main() {
  return (
    <div className='main_page'>
        <MainHeader />
        <SearchBar />
        <Home />
    </div>
  )
}

export default Main