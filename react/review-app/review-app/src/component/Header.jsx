import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { Link } from 'react-router-dom';


const Header = ({ title = "Review App", bgColor = "#333333", textColor = "#ffffff" }) => {


  const { toggleTheme } = useContext(ThemeContext);


  return (
    <header>

     <div className="container">
      <div>
        <Link to="/"> <h2>{title}</h2></Link>

        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <button onClick={toggleTheme}>Toogle Theme</button>
        </div>
    </div>
     </div>
     
    </header>
  )
}


export default Header