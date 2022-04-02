import React from 'react'
import SearchCard from './SearchCard'
import Data from '../../../data.json'


function SearchResult(props) {
  return (
    <div className='search_result'>
      <h2>Found results for '{ props.search_value }' </h2>
    
        <div className="search_card_container">
            

            {
                Data.filter(data => {
                    if(data == '') {
                        return data
                    } else if(data.title.toLowerCase().includes(props.search_value.toLowerCase())) {
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