import { useState , useEffect, useContext} from 'react'
import Header from './component/Header'
import FeedbackList from './component/FeedbackList'
import FeedbackForm from './component/FeedbackForm'
import FeedbackStats from './component/FeedbackStats'
import ThemeContext from './context/ThemeContext'




const App = () => {

  // let [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Hello");
  // }, [count])

  // const inc = () => {
  //    setCount(count + 1);
  // }

  // const dec = () => {
  //   setCount(count - 1);
  // }

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme
  }, [theme]);

  return (
    
    <>
      <Header />

      
      <div className='container'>

        {/* <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>

        <h2>{count}</h2> */}

        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
      </div>
    </>
  )
}



export default App