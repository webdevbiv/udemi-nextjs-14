import { useState } from "react";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import Post from "../Post/Post";

import styles from "./PostsList.module.css";

function PostsList({ modalIsOpen, toggleModal }) {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal onClose={toggleModal}>
          <NewPost onCancel={toggleModal} onSubmit={addPost} />
        </Modal>
      )}
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post key={nextId()} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

PostsList.propTypes = {
  modalIsOpen: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default PostsList;
