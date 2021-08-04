import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

const Comments = (props) => {
  const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isFetchingComments, setIsFetchingComments] = useState(false);
    const notificationCtx = useContext(NotificationContext);

    useEffect(() => {
        if (showComments) {
            setIsFetchingComments(true);
            fetch('/api/comments/' + eventId).then(resp => resp.json()).then(data => {
                setComments(data.comments)
                setIsFetchingComments(false);

            });
        }
    }, [showComments])


  function toggleCommentsHandler() {
      setShowComments((prevStatus) => !prevStatus);
  }

    function addCommentHandler(commentData) {
        notificationCtx.showNotification({
            title: 'Sending Comment',
            message: 'Your request is being sent',
            status: 'pending'
        });

    // send data to API
      fetch('/api/comments/' + eventId, {
          method: 'POST',
          body: JSON.stringify(commentData),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(resp => resp.json()).then(data => notificationCtx.showNotification({
          title: 'Success',
          message: 'Your comment is saved',
          status: 'success'
      }));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
          {showComments && <NewComment onAddComment={addCommentHandler} />}
          {showComments && !isFetchingComments && <CommentList items={comments} />}
          {showComments && isFetchingComments && <p>Loading comments..</p>}
    </section>
  );
}

export default Comments;
