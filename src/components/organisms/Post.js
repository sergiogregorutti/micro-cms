import PostTitle from '../atoms/PostTitle';
import PostImage from '../atoms/PostImage';
import PostDescription from '../atoms/PostDescription';
import Link from '../atoms/Link';
import usePost from '../utils/usePost';

function Post({id}) {
  const post = usePost(id);

  return (
    <div className="post">
      <Link link="/blog" text="Back to Blog" />
      &nbsp;|&nbsp;
      <Link link={`/blog/posts/${post.id}/edit`} text="Edit Post" />
      <PostTitle title={post.title} />
      {post.image !== '' && <PostImage image={post.image} />}
      <PostDescription description={post.description} />
    </div>
  );
}

export default Post;
