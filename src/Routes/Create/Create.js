import React, { useState, useEffect } from 'react';

function Create() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  // Load saved blog posts from local storage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(savedPosts);
  }, []);

  // Save blog posts to local storage whenever the 'posts' state changes
  useEffect(() => {
    localStorage.setItem('myBlogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newPost = { title, content, timestamp: new Date() };
      if (editingIndex === -1) {
        // Creating a new post
        setPosts((prevPosts) => [...prevPosts, newPost]);
      } else {
        // Editing an existing post
        const updatedPosts = [...posts];
        updatedPosts[editingIndex] = newPost;
        setPosts(updatedPosts);
        setEditingIndex(-1);
      }
      setTitle('');
      setContent('');
    }
  };

  const handleEditPost = (index) => {
    const postToEdit = posts[index];
    setTitle(postToEdit.title);
    setContent(postToEdit.content);
    setEditingIndex(index);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-5">
      <h1>Blog Posts</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleCreatePost}>
        {editingIndex === -1 ? 'Create Post' : 'Update Post'}
      </button>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="mb-3">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p className="text-muted">Posted on {formatDate(post.timestamp)}</p>
            <button
              className="btn btn-warning me-2"
              onClick={() => handleEditPost(index)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDeletePost(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Create;
