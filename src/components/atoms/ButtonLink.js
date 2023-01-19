import {Link} from 'react-router-dom';

function ButtonLink({link, text}) {
  return (
    <Link className="button-link" to={link}>{text}</Link>
  )
}

export default ButtonLink;
