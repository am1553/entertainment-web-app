import React from 'react'
import Data from '../../../../data.json'
import TrendingCard from './components/TrendingCard'

function Trending() {

  return (
    <div className='main_page__home__trending'>

        <h2>Trending</h2>
        <div className="carousel_container">

            {
              Data && Data.map( (data, key) => {
                    if(data.isTrending === true) {
                        return(
                            <TrendingCard 
                            image = { data.thumbnail.trending.small }
                            title = { data.title }
                            year = { data.year }
                            category = { data.category }
                            rating = { data.rating }
                            bookmark = { data.isBookmarked }
                            key = { key }
                            />
                        )
                    }
                } )
            }
        </div>
    </div>
  )
}

export default Trending