import { Link } from 'react-router-dom';

import './ImgLink.scss';

function ImgLink(props) {
  return (
    <div className="ImgLink">
      <Link to={props.to}>
        <img src={props.src} alt={props.alt} />
      </Link>
    </div>
  );
}

export default ImgLink;
