import PostDetailTemplate from '../templates/PostDetail';
import {useParams} from 'react-router-dom';

function PostDetail() {
  const {postId} = useParams();

  return (
    <PostDetailTemplate id={postId} />
  )
}

export default PostDetail;
