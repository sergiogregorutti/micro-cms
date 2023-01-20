import React from 'react';

function PostImage({image, title}) {
  return (
    <img src={image} alt={title} />
  )
}

export default PostImage;
