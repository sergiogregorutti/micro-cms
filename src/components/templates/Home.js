import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import PostsList from '../organisms/PostsList';

function Home({posts}) {
  return (
    <div className="main-wrapper">
      <Header />
      <Hero />
      <PostsList posts={posts} />
    </div>
  );
}

export default Home;
