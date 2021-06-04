import './Post.scss';

function Comment(props) {
  const { comment, commentDelete, postId, commentTureOrFalse } = props;

  return (
    <li className="Comment">
      <div className="Left">{comment.content}</div>
      <div className="Right">
        <button onClick={() => commentDelete(postId, comment.id)}>X</button>
        <button onClick={() => commentTureOrFalse(postId, comment.id)}>
          {comment.isLiked ? 't' : 'f'}
        </button>
      </div>
    </li>
  );
}

export default Comment;
