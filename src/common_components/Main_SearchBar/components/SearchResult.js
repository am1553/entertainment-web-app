import React, { useState } from 'react'
import SearchCard from './SearchCard'
import Data from '../../../data.json'
import Home from '../../../routes/Main/components/Home/Home'


function SearchResult(props) {

    console.log(props.nav_item)

  return (
    <div className='search_result'>
      <h2>Found results for '{ props.search_value }' </h2>
    
        <div className="search_card_container">
            

            { 
            Data.filter(data => {
            if(data == '') {
                return data
            } else if(props.nav_item === 'Home' && data.title.toLowerCase().includes(props.search_value.toLowerCase())) {
                return data
            } else if(props.nav_item === 'Movies' && data.title.toLowerCase().includes(props.search_value.toLowerCase()) && data.category === 'Movie') {
                return data
            } else if(props.nav_item === 'TV Series' && data.title.toLowerCase().includes(props.search_value.toLowerCase()) && data.category === 'TV Series') {
                return data
            } else if(props.nav_item === 'Bookmarked' && data.title.toLowerCase().includes(props.search_value.toLowerCase()) && data.isBookmarked === true) {
                return data
            }
            }).map((data, key) => {
                return(
                    <SearchCard 
                    key = { key }
                    title = { data.title }
                    image = { data.isTrending === true ? data.thumbnail.trending.small : data.thumbnail.regular.small }
                    year = { data.year }
                    category = { data.category }
                    rating = { data.rating }
                    bookmark = { data.isBookmarked }
                    />
                )
            })
        }

        </div>
    </div>
  )
}

export default SearchResult