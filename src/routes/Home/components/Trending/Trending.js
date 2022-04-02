import React from 'react'
import Data from '../../../../data.json'
import TrendingCard from './components/TrendingCard'

function Trending() {

console.log(Data[0].thumbnail.trending.small)

  return (
    <div className='main_page__home__trending'>
        <h2>Trending</h2>
        <img src={ Data[0].thumbnail.trending.small } alt="" />
        <div className="carousel_container">

            {
                Data.map( (data, key) => {
                    if(data.isTrending === true) {
                        return(
                            <TrendingCard
                            image = { data.thumbnail.trending.small }
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