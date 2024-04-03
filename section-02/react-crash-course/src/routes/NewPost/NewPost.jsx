import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

import styles from "./NewPost.module.css";

const NewPost = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

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
    console.log(newPost);
    navigate("/");
  };

  return (
    <Modal>
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
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
};

NewPost.propTypes = {};

export default NewPost;
