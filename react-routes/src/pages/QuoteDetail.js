import { Fragment, useEffect } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun' },
    { id: 'q2', author: 'Maximillan', text: 'Learning Azure is fun' }
];

const QuoteDetail = () => {
    const params = useParams();
    const { quoteId } = params;
    //No need to worry about the hardcoded URL paths
    const match = useRouteMatch();
    const {sendRequest,status, data: loadedQuote, error  } = useHttp(getSingleQuote, true);

    useEffect(() => {

        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No quote found</p>;
    }

    //const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);



    //if (!quote) {
    //    return <p>No quote found</p>;
    //}

    //NO NEED TO HARD CODE ANYTHING
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
            <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>);
};

export default QuoteDetail;