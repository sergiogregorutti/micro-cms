import {Link as ReactLink} from 'react-router-dom';

import './styles.scss';

function Link({link, text}) {
  return (
    <ReactLink className="link" to={link}>{text}</ReactLink>
  )
}

export default Link;
