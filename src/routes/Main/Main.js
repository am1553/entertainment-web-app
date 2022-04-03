import React, { useState } from 'react'
import MainHeader from '../../common_components/Main_Header/MainHeader'
import SearchCard from '../../common_components/Main_SearchBar/components/SearchCard'
import SearchResult from '../../common_components/Main_SearchBar/components/SearchResult'
import SearchBar from '../../common_components/Main_SearchBar/SearchBar'
import Movies from './components/Movies/Movies'
import Home from './components/Home/Home'
import Leave from '../../common_components/Leave/Leave'


function Main() {

  const [searchValue, setSearchValue] = useState()
  const [searchResult, setSearchResult] = useState(false)
  const [menuNav, setMenuNav] = useState(<Home />)
  const [panel, setPanel] = useState(true)
  const [navItem, setNavItem] = useState('Home')
  const [logout, setLogout] = useState(false)
  const [bodyPosition, setBodyPosition] = useState(false)

  return (
    <div className='main_page'>
        <MainHeader 
        menu_nav = { setMenuNav }
        nav_item = { setNavItem }
        logout_set_message = { setLogout }
        logout_message = { logout }
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
        {
          logout === true ? <Leave 
          logout_set_message = { setLogout }
          /> : null
        }
    </div>
  )
}

export default Main