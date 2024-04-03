import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./NewPost.module.css";

const NewPost = ({ onCancel, onSubmit }) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handlePostChange = ({ target: { id, value } }) => {
    if (id === "body") {
      setBody(value);
    } else if (id === "name") {
      setAuthor(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      body,
      author,
    };
    onSubmit(newPost);
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
          onChange={handlePostChange}
        ></textarea>
      </p>
      <p>{body}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea
          type="text"
          id="name"
          required
          onChange={handlePostChange}
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
