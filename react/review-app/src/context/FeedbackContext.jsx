import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const FeedbackContext = createContext();



export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([]);

    // const [feedback, setFeedback] = useState([
    //   {
    //     id: 1,
    //     text: "This is a sample from context 1"
    //   },
    //   {
    //     id: 2,
    //     text: "This is a sample from context 2"
    //   },
    //   {
    //     id: 3,
    //     text: "This is a sample from context 3"
    //   }
    // ]);

    // Fecth Feedback

    useEffect(() => {
      
      fetchFeedBack();

    }, []);

    const fetchFeedBack = async () => {
         
      const response = await fetch("https://69b02853c63dd197febb7c5c.mockapi.io/api/v1/tasks");

      const data = await response.json();

      setFeedback(data);

    }

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    });

    const addFeecback = (newFeedback) => {

      newFeedback.id = uuidv4();
      
      setFeedback([newFeedback, ...feedback]);

    }

    const updateFeedback = (id, updItem) => {
      
      setFeedback(
        feedback.map((item) => 
          item.id === id ? {...item, ...updItem} : item
        )
      )
      
    }

    const deleteFeedback = (id) => {
     
      if(window.confirm("Are you sure?")){
        setFeedback(feedback.filter((item) => item.id !== id));
      }

    }

    const editFeedBack = (item) => {
      setFeedbackEdit({
        item:item,
        edit:true
      })
    }

      return (
        <FeedbackContext.Provider value={
          {
            feedback:feedback,
            feedbackEdit,
            addFeecback,
            deleteFeedback,
            updateFeedback,
            editFeedBack
          }
        }>
            {children}
        </FeedbackContext.Provider>
      )

};


export default FeedbackContext;
