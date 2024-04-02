import PropTypes from "prop-types";
import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import Modal from "../Modal/Modal";
import styles from "./PostsList.module.css";

function PostsList({ modalIsOpen, toggleModal }) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal onClose={toggleModal}>
          <NewPost
            onBodyChange={handleBodyChange}
            onNameChange={handleAuthorChange}
            onCancel={toggleModal}
            body={body}
            author={author}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={author} body={body} />

        <Post author="Jane" body="Next.js is awesome" />
      </ul>
    </>
  );
}

PostsList.propTypes = {
  modalIsOpen: PropTypes.any,
  toggleModal: PropTypes.any,
};

export default PostsList;
