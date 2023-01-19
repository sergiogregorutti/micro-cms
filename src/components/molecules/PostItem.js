import React from 'react';
import PostTitle from '../atoms/PostTitle';
import PostImage from '../atoms/PostImage';
import PostDescription from '../atoms/PostDescription';

function PostItem({post}) {
  return (
    <div className="post-item">
      <PostTitle title={post.title} />
      {post.image !== '' && <PostImage image={post.image} />}
      <PostDescription description={post.description} />
    </div>
  )
}

export default PostItem;
