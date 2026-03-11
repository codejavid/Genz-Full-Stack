import { FaEdit, FaTrash } from "react-icons/fa";
import Card from "./sharder/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ({ item }) => {

    const { deleteFeedback , editFeedBack} = useContext(FeedbackContext);



    return (
        <Card>
            <div className="card-wrapper">
                <h4>{item.text}</h4>

                <div className="icon-box">
                    <div className='edit'  onClick={() => editFeedBack(item)}>
                        <FaEdit size="12px"/>
                    </div>

                    <div className='delete' onClick={() => deleteFeedback(item.id)}>
                        <FaTrash size="12px"/>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default FeedbackItem