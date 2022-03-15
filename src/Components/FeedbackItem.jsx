import { useState,useContext } from 'react'
import Card from '../Shared/Card';
import { FaTimes,FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';
export default function FeedbackItem({item ,handleDelete}) {
    const {DeleteFeedbackData,editFeedback } = useContext(FeedbackContext)
    const [rating, Setrating] = useState(item.rating);
    const [text, Settext] = useState(item.text);
    return (
        <Card>
            <div className='Card-rating'>
                {rating}
            </div>
            <button className='close' onClick={()=>DeleteFeedbackData(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <button className='edit' onClick={()=>editFeedback(item)}>
                <FaEdit color='purple'/>
            </button>
            <div className='card-description'>
                {text}
            </div>
        </Card>
    )
}
