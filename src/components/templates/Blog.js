import Header from '../organisms/Header';
import PostsList from '../organisms/PostsList';
import ButtonLink from '../atoms/ButtonLink';

function Blog({posts}) {
  return (
    <div className="main-wrapper">
      <Header />
      <h1>Blog</h1>
      <ButtonLink link="/blog/posts/create" text="Create Post" />
      <PostsList posts={posts} />
    </div>
  );
}

export default Blog;
