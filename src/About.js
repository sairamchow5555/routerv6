import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const About = () => {
  return (
    <div>
        <center>
            <h3>you are in About page</h3>
            <Link to='/' className='Link'>Back to Home</Link>
        </center>
    </div>
  )
}

export default About
