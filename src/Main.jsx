import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext';
import About from './Components/About'
import Header from "./Components/Header";
import FeedbackitemList from "./Components/FeedbackitemList";
import FeedbackStack from "./Components/FeedbackStack";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackData from "./Data/FeedbackData";
import './App.scss'
import { useState } from "react";
import AboutIconLink from './Components/AboutIconLink';

export default function Main() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (

    <Router>
      <Header />
      <main>
        <div className="Container">
            <FeedbackProvider>
          <Routes>

            <Route path='/' element={
              <>
              <FeedbackForm/>
              <FeedbackStack/>
              <FeedbackitemList/>
              <AboutIconLink/>
              </>
            }>
            </Route>
            <Route path='/about' element={<About/>}>
            </Route>
          </Routes>
         </FeedbackProvider>
        </div>
        
      </main>
    </Router>
  )
}
