import {useState, useEffect} from 'react';

const usePost = (postId) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'));

    const postIndex = posts.findIndex(({id}) => id === postId);
    if (postIndex >= 0) {
      setPost(posts[postIndex]);
    }
  }, [postId]);

  if (!postId) {
    return {
      title: '',
      image: '',
      description: ''
    }
  }

  return post;
};

export default usePost;
