import EditPostTemplate from '../templates/EditPost';
import {useParams} from 'react-router-dom';

function EditPost() {
  const {postId} = useParams();

  return (
    <EditPostTemplate id={postId} />
  )
}

export default EditPost;
