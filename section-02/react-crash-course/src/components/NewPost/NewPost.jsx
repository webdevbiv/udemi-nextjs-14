import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./NewPost.module.css";

const NewPost = ({ onCancel, onSubmit }) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      body,
      author,
    };
    onSubmit(post);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={handleBodyChange}
        ></textarea>
      </p>
      <p>{body}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea
          type="text"
          id="name"
          required
          onChange={handleAuthorChange}
        ></textarea>
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

NewPost.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NewPost;
