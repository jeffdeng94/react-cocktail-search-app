import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <section className="section error-page">
      <div className="error-page-container">
        <h1>Oops! it's a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          Home
        </Link>
      </div>
    </section>
  )
}
