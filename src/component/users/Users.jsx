import React, { useState } from "react";
import { useEffect } from "react";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(Error);
    }
  };

  const getUserPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(Error);
    }
  };

  const getUserTodos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.log(Error);
    }
  };

  const getUsersAlbums = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await res.json();
      setAlbums(data);
    } catch (error) {
      console.log(Error);
    }
  };

  const getUserPhotos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setPhotos(data);
    } catch (error) {
      console.log(Error);
    }
  };

  const getUserComments = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            <h2 className="id">{user.id}</h2>
            <h3 className="title2">{user.name} </h3>
            <h4 className="title3">{user.username}</h4>
            <p className="email"> Email: {user.email}</p>
            <p className="text"> Website: {user.website}</p>
            <p className="text"> Address: {user.address.street}</p>
            <p className="text">Phone: {user.phone}</p>
            <button className="btn" onClick={() => getUserPosts(user.id)}>
              Posts{" "}
            </button>
            <button className="btn" onClick={() => getUserTodos(user.id)}>
              Todos{" "}
            </button>
            <button className="btn" onClick={() => getUsersAlbums(user.id)}>
              Album{" "}
            </button>
          </div>
        ))}
      </div>

      <div className="posts ">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="id">{post.id}</h2>
            <h3 className="title2">{post.title} </h3>
            <p className="text"> {post.body}</p>
            <button
              className="btn btn2"
              onClick={() => getUserComments(post.id)}
            >
              Comments{" "}
            </button>
          </div>
        ))}
      </div>

      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <h3 className="commetId">{comment.id}</h3>
            <p className="comment_email"> Email: {comment.email}</p>
            <hr className="comment_hr" />
            <h3 className="comment_title">{comment.name} </h3>
            <p className="comment_text"> {comment.body}</p>
            {/* <button className="btn btn2" onClick={() => getUserPosts(post.id)}>
              Comments{" "}
            </button> */}
          </div>
        ))}
      </div>

      <div className="todos">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <h3 className="title2">{todo.title} </h3>
            <p className="text"> {todo.completed ? "✅" : "❌"}</p>
          </div>
        ))}
      </div>

      <div className="albums ">
        {albums.map((album) => (
          <div key={album.id} className="album">
            <h3 className="title2">{album.title} </h3>
            <button
              className="btn btn2 btn3"
              onClick={() => getUserPhotos(album.id)}
            >
              Photos{" "}
            </button>
          </div>
        ))}
      </div>

      <div className="photos ">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img
              className="img"
              src=" https://picsum.photos/200/300"
              alt="Rasm"
            />
            <h3 className="title2">{photo.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
