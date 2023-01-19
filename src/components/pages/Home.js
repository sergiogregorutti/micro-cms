import HomeTemplate from '../templates/Home';
import usePosts from '../utils/usePosts';

function Home() {
  const posts = usePosts();

  return (
    <HomeTemplate posts={posts} />
  );
}

export default Home;
