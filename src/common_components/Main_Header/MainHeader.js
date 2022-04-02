import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import HomeNav from '../../assets/icon-nav-home.svg'
import MoviesNav from '../../assets/icon-nav-movies.svg'
import TvSeriesNav from '../../assets/icon-nav-tv-series.svg'
import BookMarkNav from '../../assets/icon-nav-bookmark.svg'
import AvatarImage from '../../assets/image-avatar.png'


function MainHeader() {

    const [homeNavActive, setHomeNavActive] = useState(true)
    const [movieNavActive, setMovieNavActive] = useState(false)
    const [tvSeriesNavActive, setTvSeriesNavActive] = useState(false)
    const [bookMarkNavActive, setBookMarkNavActive] = useState(false)


  return (
    <div className='main_page__header'>
        <img src={ Logo } alt="" />

        <nav>

            <li 
                className = { homeNavActive === true ? 'active' : null }
                onClick = { () => {
                    setHomeNavActive(true)
                    setMovieNavActive(false)
                    setTvSeriesNavActive(false)
                    setBookMarkNavActive(false)
                }  } >
                <img src={ HomeNav } alt="" />
            </li>

            <li className= { movieNavActive === true ? 'active' : null }
                onClick = { () => {
                    setMovieNavActive(true)
                    setHomeNavActive(false)
                    setTvSeriesNavActive(false)
                    setBookMarkNavActive(false)
                } }
            >
                <img src={ MoviesNav } alt="" />
            </li>

            <li className = { tvSeriesNavActive === true ? 'active' : null }
                onClick = { () => {
                    setTvSeriesNavActive(true)
                    setHomeNavActive(false)
                    setMovieNavActive(false)
                    setBookMarkNavActive(false)
                } }
            >
                <img src={ TvSeriesNav } alt="" />
            </li>

            <li className= { bookMarkNavActive === true ? 'active' : null }
                onClick = { () => {
                    setBookMarkNavActive(true)
                    setHomeNavActive(false)
                    setMovieNavActive(false)
                    setTvSeriesNavActive(false)
                } }
            >
                <img src={ BookMarkNav } alt="" />
            </li>

        </nav>

        <img src={ AvatarImage } alt="" className='user_avatar'/>
    </div>
  )
}

export default MainHeader