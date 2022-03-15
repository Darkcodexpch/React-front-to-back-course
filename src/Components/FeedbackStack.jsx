import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
export default function FeedbackStack() {
  const { feedback } = useContext(FeedbackContext)
  let length = Object.keys(feedback).length;
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / length;
  return (
    <div className='feedbackstack'>
      <div className='feedbackLenght'>
        Reviews: {length}
      </div>
      <div className='feedbackAverage'>
        Average Rating: {isNaN(average) ? 0 : average}
        
      </div>
    </div>
  )
}
