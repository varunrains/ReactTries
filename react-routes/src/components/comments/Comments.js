import { useState, useEffect, useCallback } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const params = useParams();
    const { quoteId } = params;
    const { sendRequest, status, data: loadedComments, error } = useHttp(getAllComments);

    useEffect(() => {
        sendRequest(quoteId)
    }, [quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    let comments;

    if (status === 'pending') {
        comments = (<div className='centered'>
            <LoadingSpinner />
        </div>)
    }

    if (status === 'completed' && loadedComments && loadedComments.length > 0) {
        comments = <CommentsList comments={loadedComments} />
    }


    if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
        comments = <p className='centered'>No comments were added yet!!</p>
    }


    if (error) {
        return <p className='centered'>{error}</p>
    }

  

  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
          )}
          {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler } />}
          { comments}
    </section>
  );
};

export default Comments;
