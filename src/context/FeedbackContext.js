import { createContext, useState } from 'react'
const FeedbackContext = createContext()
export const FeedbackProvider = ({ children }) => {
  // add feedbackstate
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is for check",
      rating: 10
    }
  ])

  // Edit feedback state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  // Delete Feedback
  const DeleteFeedbackData = (id) => {
    window.confirm('Are you sure You want to delete??')
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  // add feedback
  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
    console.log(feedback)
    setFeedback([newFeedback, ...feedback]);
  }

  // edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })


  }
  // updateFeedbackData
  const UpdateFeedback = (id, upitem) => {
    setFeedback(feedback.map((item)=>(item.id===id? {...item,...upitem} :item)))
    setFeedbackEdit({
      item:'',
      edit: false
    })
    console.log(id,upitem)
  }

  return <FeedbackContext.Provider value={{ feedback, DeleteFeedbackData, addFeedback, editFeedback, feedbackEdit, UpdateFeedback }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;