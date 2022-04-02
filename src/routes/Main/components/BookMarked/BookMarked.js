import React from 'react'
import DataCard from '../../../../common_components/DataCard/DataCard'
import Data from '../../../../data.json'

function BookMarked() {
  return (
    <div className='main_page__bookmarked'>
        <div className="bookmarked_container">
        {
            Data.filter(data => {
                if(data.isBookmarked === true) {
                    return data
                }
            }).map((data, key) => {
                return(
                    <DataCard
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

export default BookMarked