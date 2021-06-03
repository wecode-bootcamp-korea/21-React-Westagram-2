import './Post.scss';

function Comment(props) {
  const { comment, commentDelete, postId } = props;

  return (
    <li className="Comment">
      <div className="Left">{comment.content}</div>
      <div className="Right">
        <button onClick={() => commentDelete(postId, comment.id)}>X</button>
        <button>❤</button>
      </div>
    </li>
  );
}

export default Comment;
