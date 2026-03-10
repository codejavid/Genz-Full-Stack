import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"



const FeedbackStats = () => {

  const { feedback } = useContext(FeedbackContext);  

  return (
    <div>
        <h4>{(feedback.length)} - Length</h4>
    </div>
  )
}

export default FeedbackStats