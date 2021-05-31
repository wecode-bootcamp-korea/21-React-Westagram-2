import './Post.scss';

function Comment(props) {
  const { comment } = props;

  return (
    <li className="Comment">
      <div className="Left">{comment.content}</div>
      <div className="Right">
        <button>X</button>
        <button>❤</button>
      </div>
    </li>
  );
}

export default Comment;
