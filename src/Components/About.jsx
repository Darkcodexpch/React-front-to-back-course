import Card from "../Shared/Card"
import { Link } from "react-router-dom"

export default function About() {
  return (
   <Card>
       <div className="about">
           <h1>About Page about this project</h1>
           <p>This is the react app to leave feedback for a prodcuts for services</p>
           <Link to='/'>Back to Home</Link>

       </div>

   </Card>
  )
}
