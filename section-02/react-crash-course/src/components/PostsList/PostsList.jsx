import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

import Post from "../Post/Post";

import styles from "./PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();
        if (!response.ok) {
          setError(data.message || "Something went wrong");
        } else {
          setPosts(data.posts);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getPosts();
  }, []);

  // const addPost = (post) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(post),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((prevPosts) => [post, ...prevPosts]);
  // };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && posts.length > 0 && !error && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={nextId()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isLoading && !error && posts.length === 0 && (
        <>
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        </>
      )}
    </>
  );
}

PostsList.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default PostsList;
