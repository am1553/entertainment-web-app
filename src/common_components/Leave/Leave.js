import React from 'react'

function Leave(props) {
  return (
    <div className='logout_message'>
        <div className="message_card">
            <h3>Are you sure you want to leave?</h3>
            <button className='logout_button'>Logout</button>
            <p onClick={() => props.logout_set_message(false)}>Cancel</p>
        </div>
    </div>
  )
}

export default Leave