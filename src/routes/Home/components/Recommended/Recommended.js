import React from 'react'
import RecommendedCard from './components/RecommendedCard'
import Data from '../../../../data.json'


function Recommended() {
  return (
    <div className='main_page__home__recommended'>
        <h2>Recommended for you</h2>
        <div className="recommended_card_wrapper">

            {
                Data.map( (data, key) => {
                    if(data.isTrending === false) {
                        return(
                            <RecommendedCard 
                            key = { key }
                            title = { data.title }
                            image = { data.thumbnail.regular.small }
                            year = { data.year }
                            category = { data.category }
                            rating = { data.rating }
                            bookmark = { data.isBookmarked } 
                            />
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default Recommended