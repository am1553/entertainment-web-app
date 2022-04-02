import React, { useState } from 'react'
import BookMarkIcon from '../../../../../assets/icon-bookmark-empty.svg'
import BookMarkFullIcon from '../../../../../assets/icon-bookmark-full.svg'
import MovieCategoryIcon from '../../../../../assets/icon-category-movie.svg'
import TvSeriesCategoryIcon from '../../../../../assets/icon-category-tv.svg'

function RecommendedCard(props) {

  const [bookMark, setBookMark] = useState(props.bookmark)

  const handleBookMark = () => {
    setBookMark(!bookMark)
  }

  return (
    <div className='recommended_card_container'>
        <div className="recommended_card_container__card">

          <img src={ props.image } alt='' />

          <button className="bookmark_button" onClick={ handleBookMark }>
            <img src={ bookMark === true ? BookMarkFullIcon : BookMarkIcon } alt="" />
        </button>
           
        </div>
        <div className="info_wrapper">
            <ul className="information">
                <li>{ props.year }</li>
                <li><img src={ MovieCategoryIcon } alt="" />Movie</li>
                <li>{ props.category }</li>
            </ul>
            <h4>{ props.title }</h4>
        </div>
    </div>
  )
}

export default RecommendedCard