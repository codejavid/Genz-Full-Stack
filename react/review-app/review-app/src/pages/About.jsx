import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container'>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus modi molestiae culpa itaque reiciendis, nisi, hic asperiores minima veniam alias amet animi! Voluptate eaque quasi dignissimos expedita saepe soluta fugiat? Perferendis eius voluptatibus consequatur omnis earum! Nostrum quibusdam ut quos laborum eos cum corporis dicta officia dolore amet! Libero?</p>
        <Link to="/">
          back to home
        </Link>
    </div>
  )
}

export default About