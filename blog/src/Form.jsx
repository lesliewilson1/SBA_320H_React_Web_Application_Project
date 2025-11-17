import { useState, useRef, useEffect } from "react";
import Api from "./Api";

export default function Form() {

  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState(false)

  //-------------------------------End of State------------------------------------------------//

 
  const inputRef = useRef(null);

  //-------------------------------Start of Functions------------------------------------------------//
 
  //Prevent browser from reloading the page
  function handleSubmit(e) {
    e.preventDefault();
  }
  
  //Adding a focus
  function handleRef() {
    inputRef.current.focus()
  }
  useEffect(() => {
    handleRef();
  }, []);
 


  return (
    <>
      <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Type your question here"
              ref={inputRef}
              type="text"
              required
              value={question}

              onChange={e => {
                setQuestion(e.target.value)
                setShowQuestion(false)
              } }
            />
            <button 
              onClick={() => setShowQuestion(true)}>
                Submit Here
            </button>
          </label>

      </form>

      {showQuestion && <h3>Question: {question}</h3>}

      <div>
        <Api />
      </div>
    </>
  );
}
