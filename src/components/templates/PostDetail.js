import Header from '../organisms/Header';
import Post from '../organisms/Post';

function PostDetail({id}) {
  return (
    <div className="main-wrapper">
      <Header />
      <Post id={id} />
    </div>
  );
}

export default PostDetail;
