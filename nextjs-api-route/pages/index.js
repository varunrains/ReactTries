import { useRef, useState } from "react";

function HomePage() {
    const emailInputRef = useRef();
    const feedbackInputRef = useRef();
    const [feedbackItems, setFeedbackItems] = useState([]);

    const submitFormHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;
        const reqBody = { email: enteredEmail, text: enteredFeedback };
        //automatically sent to the same domain
        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(resp => response.json()).then(data => console.log(data));
    }

    const loadFeedbackHandler = () => {
        fetch('/api/feedback').then(resp => response.json()).then(data => setFeedbackItems(data.feedback));
    }

  return (
    <div>
          <h1>The Home Page</h1>
          <form onSubmit={submitFormHandler}>
              <div>
              <label htmlFor='email'>Your email address</label>
                  <input type='email' id='email' ref={emailInputRef} />
              </div>
              <div>
                  <label htmlFor='feedback'>Your feedback</label>
                  <textarea id='feedback' rows='5' ref={feedbackInputRef}/>
              </div>
              <button>Send Feedback</button>
          </form>
          <hr />
          <button onClick={loadFeedbackHandler}>Load Feedback</button>
          <ul>
              {feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
          </ul>
    </div>
  );
}

export default HomePage;
