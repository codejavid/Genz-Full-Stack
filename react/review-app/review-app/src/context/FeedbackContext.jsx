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

      const sortedArray = data.reverse();

      setFeedback(sortedArray);

    }

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    });

    const addFeecback = async(newFeedback) => {

      const response = await fetch("https://69b02853c63dd197febb7c5c.mockapi.io/api/v1/tasks", {
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(newFeedback)
      });

      const data = await response.json();
      
      setFeedback([data, ...feedback]);

    }

    const updateFeedback = async(id, updItem) => {

      const response = await fetch(`https://69b02853c63dd197febb7c5c.mockapi.io/api/v1/tasks/${id}`, {
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(updItem)
      });

      const data = await response.json();
      
      
      setFeedback(
        feedback.map((item) => 
          item.id === id ? {...item, ...data} : item
        )
      )
      
    }

    const deleteFeedback = async(id) => {
     
      if(window.confirm("Are you sure?")){

        const response = await fetch(`https://69b02853c63dd197febb7c5c.mockapi.io/api/v1/tasks/${id}`, {
          method:"DELETE",
        });

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
            editFeedBack,
            setFeedbackEdit
          }
        }>
            {children}
        </FeedbackContext.Provider>
      )

};


export default FeedbackContext;
