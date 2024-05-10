import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>Requested Page does not exist</h1>
      <Link to={'/'} className='link-btn'>Go Home</Link>
    </div>
  )
}

export default NotFound
