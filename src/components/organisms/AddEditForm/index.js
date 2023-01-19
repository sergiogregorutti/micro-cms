import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import usePost from '../../utils/usePost';
import {v4 as uuid} from 'uuid';

import './styles.scss';

function AddEditForm({id}) {
  const navigate = useNavigate();
  const isAddMode = !id;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('onSubmit', data);
    return isAddMode
        ? createPost(data)
        : updatePost(id, data);
  }

  const createPost = (data) => {
    const posts = JSON.parse(localStorage.getItem('posts'));

    data.id = uuid();

    posts.push(data);

    localStorage.setItem('posts', JSON.stringify(posts));
    navigate(`/blog/posts/${data.id}`);
  }

  const updatePost = (id, data) => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    data.id = id;

    const index = posts.findIndex(obj => {return obj.id === id;});
    posts[index] = data;

    localStorage.setItem('posts', JSON.stringify(posts));
    navigate(`/blog/posts/${id}`);
  }

  const post = usePost(id);

  useEffect(() => {
    reset(post);
  }, []);

  return (
    <div>
      {(isAddMode || post) && <form className="create-edit-post" onSubmit={handleSubmit(onSubmit)}>
        <h1>{isAddMode ? 'Create Post' : 'Edit Post'}</h1>
        <div>
          <div className="form-group">
            <label>Title</label>
            <input defaultValue={post.title} {...register("title")} />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input defaultValue={post.image} {...register("image")} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea defaultValue={post.description} {...register("description")} rows="5"></textarea>
          </div>
        </div>
        <div>
          <button type="submit">Save</button>
          <Link to={'/blog'}>Cancel</Link>
        </div>
      </form>}
    </div>
  );
}

export default AddEditForm;
