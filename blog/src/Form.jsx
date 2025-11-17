import { useState, useRef, useEffect } from "react";
import Api from "./Api";

export default function Form() {

  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState("");
  const inputRef = useRef(null);


  //---------------------------------------End---------------------------------------------------------//

 

  //-------------------------------Start of Functions------------------------------------------------//
 
  //Prevent browser from reloading the page
  function handleSubmit(e) {
    e.preventDefault();
    setShowQuestion(question);
    setQuestion("");
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
              size={50}
              onChange={e => {
                setQuestion(e.target.value)
              } }
            />
          </label>
          <button type="submit">
              Submit
            </button>

      </form>

      {showQuestion && <h3 className="question">Question: {showQuestion}</h3>}
      <Api question={showQuestion} />

    </>
  );
}
