import { useState,useContext, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import Card from '../Shared/Card'
import Button from '../Shared/Button'
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';
export default function FeedbackForm() {
  const {addFeedback,feedbackEdit,UpdateFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState('');
  const [btnDisable, setBtnDisable] = useState(true)
  const [rating, setRating] = useState()
  const [message, setMessage] = useState('')

  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setBtnDisable(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  },[feedbackEdit])
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisable(true);
      setMessage(null)
    }
    else if (text !== ' ' && text.trim().length <= 10) {
      setBtnDisable(true)
      setMessage('Text Atleast 10 characters')

    }
    else {
      setBtnDisable(false);
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      let id = uuidv4();
      const newFeedback = {
        id,
        text,
        rating
      }
      addFeedback(newFeedback)

      if(feedbackEdit.edit === true){
        UpdateFeedback(feedbackEdit.item.id,newFeedback)
      }
      else{
        addFeedback(newFeedback);
      }
      setText('');
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input type="text" placeholder='Write a review'
            value={text} onChange={handleTextChange} />
          <Button type='submit' version='secondary' isDisable={btnDisable}>{feedbackEdit.edit?"Update":"Submit"}</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
