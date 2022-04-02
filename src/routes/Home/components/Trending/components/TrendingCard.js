import React, { useState } from 'react'
import MovieIcon from '../../../../../assets/icon-nav-movies.svg'
import BookMarkIcon from '../../../../../assets/icon-bookmark-empty.svg'
import BookMarkFullIcon from '../../../../../assets/icon-bookmark-full.svg'



function TrendingCard(props) {

  const [bookMark, setBookMark] = useState()

  const handleBookMark = () => {
    setBookMark(!bookMark)
  }


  return (
    <div className='trending_card'>

        <img src={ props.image } alt="" className='background_image'/>

        <button className="bookmark_button" onClick={ handleBookMark }>
            <img src={ bookMark === true? BookMarkFullIcon : BookMarkIcon } alt="" />
        </button>
        <div className="info_wrapper">
            <ul className="information">
                <li>2019</li>
                <li><img src={ MovieIcon } alt="" />Movie</li>
                <li>PG</li>
            </ul>
            <h3>{ props.title }</h3>
        </div>
    </div>
  )
}

export default TrendingCard