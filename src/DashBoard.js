import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const DashBoard = () => {
  return (
    <div>
        <center>
            <h3>DashBoard Page</h3>
            <Link to='/' className='Link'>Back to Home</Link>
        </center>
    </div>
  )
}

export default DashBoard
