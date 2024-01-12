import React, { useState } from "react";
import { useEffect } from "react";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      setPosts(data);
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
          </div>
        ))}
      </div>

      <div className="posts ">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {/* <h2 className="id">{post.id}</h2> */}
            <h3 className="title2">{post.title} </h3>
            <p className="text"> {post.body}</p>
            <button className="btn btn2" onClick={() => getUserPosts(post.id)}>
              Comments{" "}
            </button>

            {/* 
            <h2> ${post.title}</h2>
        <p>I ${post.body}</p>
        <a class='btn'  href="/pages/comments.html"><button class"btn">Comments</button></a>
      </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
