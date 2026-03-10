import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const Header = ({ title = "Review App", bgColor = "#333333", textColor = "#ffffff" }) => {


  const { toggleTheme } = useContext(ThemeContext);


  return (
    <header>

      <h2>{title}</h2>

      <button onClick={toggleTheme}>Toogle Theme</button>
    </header>
  )
}


export default Header