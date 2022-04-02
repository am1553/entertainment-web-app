import React, { useState } from 'react'
import BookMark from '../../../assets/icon-bookmark-empty.svg'
import BookMarkFull from '../../../assets/icon-bookmark-full.svg'
import MovieCategoryIcon from '../../../assets/icon-category-movie.svg'
import TvSeriesCategoryIcon from '../../../assets/icon-category-tv.svg'
import Data from '../../../data.json'

function SearchCard(props) {

    const [bookMark, setBookMark] = useState(props.bookmark)

    const handleBookMark = () => {
      setBookMark(!bookMark)
    }


  return (
    <div className='search_bar__card_container'>
        <div className="card">
          <img src={ props.image } alt="" className='background_image'/>
          <button className='bookmark' onClick={ handleBookMark }><img src={ bookMark === true ? BookMarkFull : BookMark } alt="" /></button>
        </div>
        <div className="info_wrapper">
          <ul className="information">
            <li className='text-small'>{ props.year }</li>
            <li className='text-small'><img src={ props.category === 'Movie' ? MovieCategoryIcon : TvSeriesCategoryIcon } alt="" />{ props.category }</li>
            <li className='text-small'>{ props.rating }</li>
          </ul>
          <h4>{ props.title }</h4>
        </div>
    </div>
  )
}

export default SearchCard