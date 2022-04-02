import React, { useState } from 'react'
import MainHeader from '../../common_components/Main_Header/MainHeader'
import SearchCard from '../../common_components/Main_SearchBar/components/SearchCard'
import SearchResult from '../../common_components/Main_SearchBar/components/SearchResult'
import SearchBar from '../../common_components/Main_SearchBar/SearchBar'
import Home from '../Home/Home'

function Main() {

  const [searchValue, setSearchValue] = useState()
  const [home, setHome] = useState(true)
  const [searchResult, setSearchResult] = useState(false)

  return (
    <div className='main_page'>
        <MainHeader />
        <SearchBar  search_value = {setSearchValue} home_state = { setHome } search_card_state = { setSearchResult } />
        { home === true ? <Home /> : null}
        {searchResult === true ? <SearchResult search_value = { searchValue }/> : null}
    </div>
  )
}

export default Main