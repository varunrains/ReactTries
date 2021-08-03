import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import { useState, Fragment } from "react";


const Feedback = (props) => {
    const [feedbackData, setFeedbackData] = useState()
    const loadFeedbackHandler = (id) => {
        // /api/some-feedback-id
        fetch('/api/' + id).then(resp => resp.json()).then(data => setFeedbackData(data.feedback)); 
    };

    return (
        <Fragment>
            {feedbackData && <p>{feedbackData.email}</p>}
        <ul>
            {props.feedbackItems.map(item =>
                <li key={item.id}>
                    {item.text}<button
                        onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button></li>)}
            </ul>
        </Fragment>
        );
};

//Dont use the API call to fetch the data from the same project
//So if you are using the same domain/same project use the data
//directly dont use 'fetch' to get the data inside the
// 'getStaticProps' method.
export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    return {
        props: {
            feedbackItems: data
        }
    }
}

export default Feedback;