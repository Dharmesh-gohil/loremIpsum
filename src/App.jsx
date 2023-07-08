import { useState } from "react";
import data from "./data"
import { nanoid} from "nanoid"

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  
  const handleSubmit = (e) => { 
    e.preventDefault()
    // console.log(count)
    // console.log(1)
    let amount = parseInt(count)
    setText(data.slice(0,amount))
  }
  // console.log(data)
  // console.log(text)
  return <div className="section-center">
    <h4>chose the number to display the paragraph</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount" className="form-row">paragraphs:-</label>
      <input type="number"
        id="amount"
        name="amount"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        min="1" step="1" max="8" />
      <button className="btn"
        type="submit">Generate</button>

    </form>
    <article className="lorem-text">
      {text.map((item) => {
        return <p key={nanoid() }>{ item}</p>
       })}

    </article>
  </div>;
};
export default App;
