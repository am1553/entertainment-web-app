import React, { useState } from 'react'
import MainHeader from '../../common_components/Main_Header/MainHeader'
import SearchCard from '../../common_components/Main_SearchBar/components/SearchCard'
import SearchResult from '../../common_components/Main_SearchBar/components/SearchResult'
import SearchBar from '../../common_components/Main_SearchBar/SearchBar'
import Movies from './components/Movies/Movies'
import Home from './components/Home/Home'


function Main() {

  const [searchValue, setSearchValue] = useState()
  const [searchResult, setSearchResult] = useState(false)
  const [menuNav, setMenuNav] = useState(<Home />)
  const [panel, setPanel] = useState(true)
  const [navItem, setNavItem] = useState('Home')


  return (
    <div className='main_page'>
        <MainHeader 
        menu_nav = { setMenuNav }
        nav_item = { setNavItem }
        />

        <SearchBar  
        search_value = {setSearchValue} 
        panel_state = { setPanel } 
        search_card_state = { setSearchResult }
        nav_item = { navItem }
        />

        {searchResult === true ? 
          <SearchResult 
          search_value = { searchValue } 
          menu_nav = { menuNav }
          nav_item = { navItem } 
          /> : 
          null
        }


        {
          panel === true ? menuNav : null
        }
    </div>
  )
}

export default Main