import React from 'react';
import PostItem from '../molecules/PostItem';
import {Link} from 'react-router-dom';

function PostsList({posts}) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <Link key={post.id} to={`/blog/posts/${post.id}`}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  )
}

export default PostsList;
