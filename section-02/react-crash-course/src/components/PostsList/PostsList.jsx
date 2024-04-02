import { useState } from "react";

import PropTypes from "prop-types";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

import styles from "./PostsList.module.css";

function PostsList({ modalIsOpen, toggleModal }) {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal onClose={toggleModal}>
          <NewPost onCancel={toggleModal} onSubmit={addPost} />
        </Modal>
      )}

      <ul className={styles.posts}></ul>
    </>
  );
}

PostsList.propTypes = {
  modalIsOpen: PropTypes.any,
  toggleModal: PropTypes.any,
};

export default PostsList;
