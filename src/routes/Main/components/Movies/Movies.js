import React from 'react'
import DataCard from '../../../../common_components/DataCard/DataCard'
import Data from '../../../../data.json'


function Movies() {
  return (
    <div className='main_page__movies'>
        <div className="movies_container">
        {
            Data.filter(data => {
                if(data.category === 'Movie') {
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

export default Movies