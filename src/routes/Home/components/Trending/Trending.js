import React from 'react'
import Data from '../../../../data.json'
import TrendingCard from './components/TrendingCard'


function Trending() {
  return (
    <div className='main_page__home__trending'>
        <h2>Trending</h2>

        <div className="carousel_container">

            {
                Data.map( (data, key) => {
                    if(data.isTrending === true) {
                        return(
                            <TrendingCard
                            background_image = { data.thumbnail.trending.small }
                            title = { data.title }
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