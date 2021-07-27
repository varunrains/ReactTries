import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from 'react-router-dom';
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";


const NewQuote = () => {
    const history = useHistory();
    
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);

        

        //Navigate programmatically using the hook
        history.push('/quotes'); //You are allowing the user to go back (Back button will not work)
        //history.replace('/quotes'); //Your are not allowing the user to go back (The history is cleared) (Back button will not work)
    }

    return <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'} />;
};

export default NewQuote;