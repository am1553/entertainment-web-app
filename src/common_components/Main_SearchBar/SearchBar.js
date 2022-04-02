import React from 'react'
import SearchIcon from '../../assets/icon-search.svg'


function SearchBar(props) {

  const handleSearch = (e) => {
    props.search_value(e.target.value)
    if(e.target.value === '') {
      props.home_state(true)
      props.search_card_state(false)
    } else {
      props.home_state(false)
      props.search_card_state(true)
    }
  }

  return (
    <div className='main_page__search_bar'>
        <img src= { SearchIcon } alt="" />
        <input type="text" placeholder='Search for movies or Tv series' onChange={ handleSearch } />
    </div>
  )
}

export default SearchBar