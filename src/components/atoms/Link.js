import {Link as ReactLink} from 'react-router-dom';

function Link({link, text}) {
  return (
    <ReactLink className="link" to={link}>{text}</ReactLink>
  )
}

export default Link;
