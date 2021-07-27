import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';


const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

const QuoteList = (props) => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

    const changeSortingHandler = () => {
        //You can also pass an object to 'push'
        history.push({
            pathname: location.pathname,
            search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
        });

        //calling push will re-evaluate your component.
        //history.push(`${location.pathname}?sort=` + (isSortingAscending ? 'desc' : 'asc'));
    }

  return (
      <Fragment>
          <div className={classes.sorting}>
              <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending':'Ascending'}</button>
          </div>
      <ul className={classes.list}>
              {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
