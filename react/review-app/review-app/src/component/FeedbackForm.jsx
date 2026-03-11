import Card from "./sharder/Card"
import Button from "./sharder/Button"
import { useEffect, useState } from "react"
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {

  const { addFeecback , updateFeedback, feedbackEdit, setFeedbackEdit} = useContext(FeedbackContext);


  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");


  const handleTextChange = (e) => {

    const trimmedText = e.target.value.trimStart();
    
    let textError = "";

    if(trimmedText.length < 10){
      textError = "Character must be at least 10";
      setMessage(textError);
      setBtnDisabled(true);
    }else{
      setMessage("");
      setBtnDisabled(false);
    }

    setText(trimmedText);

  }

  const handleAdd = (e) => { 
    e.preventDefault();

    const newFeedback = {
      text
    }

    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback);
      console.log("Update")
      setFeedbackEdit({
        item:{},
        edit:false
      })
    }else{
      addFeecback(newFeedback);
      console.log("SUBMIT");
    }

    setText("");
    setBtnDisabled(true);
  }


  useEffect(() => {

    if(feedbackEdit.edit === true){
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
    } 
   

  }, [feedbackEdit]);



  return (
    <Card>
        <h3>Add your review</h3>

        <form onSubmit={handleAdd}>
          <div className="input-group">
          <input type="text" placeholder="Enter your ideas" value={text} onChange={handleTextChange}/>
          <Button version="secondary" type="submit" isDisabled={btnDisabled}>Send</Button>
          </div>
          {message ? message : null}
        </form>
    </Card>
  )
}

export default FeedbackForm