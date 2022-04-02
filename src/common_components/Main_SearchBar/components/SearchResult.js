import React from 'react'

function SearchResult(props) {
  return (
    <div className='search_result'>
      <h2>Found 2 results for '{ props.search_value }' </h2>

    </div>
  )
}

export default SearchResult