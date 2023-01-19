import {useState, useEffect} from 'react';
import {posts as postsData, generateMockData} from './mockData';

const usePosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const mockData = JSON.parse(localStorage.getItem('mockData'));
      if (!mockData) {
        localStorage.setItem('mockData', true);
        localStorage.setItem('posts', JSON.stringify(generateMockData(postsData)));
      }
  
      const posts = JSON.parse(localStorage.getItem('posts'));
      if (posts) {
        setPosts(posts);
      }
    }, []);

  return posts;
};

export default usePosts;
