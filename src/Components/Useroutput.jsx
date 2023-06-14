import React from 'react'

const Useroutput = (props) => {
  return (
    <div className='wrapper'>
        <h1>My name is {props.username}. I am a SAIL student.</h1>
    </div>
  )
}

export default Useroutput