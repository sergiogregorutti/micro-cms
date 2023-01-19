import BlogTemplate from '../templates/Blog';
import usePosts from '../utils/usePosts';

function Blog() {
  const posts = usePosts();

  return (
    <BlogTemplate posts={posts} />
  )
}

export default Blog;
