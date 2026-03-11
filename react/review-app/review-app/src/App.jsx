import { useState , useEffect, useContext} from 'react'
import Header from './component/Header'
import FeedbackList from './component/FeedbackList'
import FeedbackForm from './component/FeedbackForm'
import FeedbackStats from './component/FeedbackStats'
import ThemeContext from './context/ThemeContext'
import { Routes, Route } from 'react-router-dom'
import Blog from "./pages/Blog"
import About from "./pages/About"
import NotFound from "./pages/NotFound"


const App = () => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme
  }, [theme]);

  return (
    
    <>
      <Header />

      
      <div className='container'>

        <Routes>
           <Route path='/' element={
            <>
            <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList/>
            </>
           }/>
           <Route path='/blog' element={
            <Blog/>
           }/>
           <Route path='/about' element={
            <About/>
           }/>
           <Route path='*' element={
            <NotFound/>
           }/>
        </Routes>

       
      </div>
    </>
  )
}



export default App