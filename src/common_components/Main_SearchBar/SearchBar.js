import React from 'react'
import SearchIcon from '../../assets/icon-search.svg'


function SearchBar(props) {

  const handleSearch = (e) => {
    props.search_value(e.target.value)
    if(e.target.value === '') {
      props.search_card_state(false)
      props.panel_state(true)
    } else {
      props.search_card_state(true)
      props.panel_state(false)
    }
  }

  return (
    <div className='main_page__search_bar'>
        <img src= { SearchIcon } alt="" />
        <input 
        type="text" 
        placeholder={ props.nav_item === 'Home' ? 'Search for movies or Tv series' :
                      props.nav_item === 'Movie' ? 'Search for movies' :
                      props.nav_item === 'TV Series' ? 'Search for TV series' :
                      'Search for bookmarked shows' 
                    } 
        onChange={ handleSearch } 
        />
    </div>
  )
}

export default SearchBar