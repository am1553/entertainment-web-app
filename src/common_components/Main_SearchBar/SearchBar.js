import React from 'react'
import SearchIcon from '../../assets/icon-search.svg'


function SearchBar() {
  return (
    <div className='main_page__search_bar'>
        <img src= { SearchIcon } alt="" />
        <input type="text" placeholder='Search for movies or Tv series' />
    </div>
  )
}

export default SearchBar