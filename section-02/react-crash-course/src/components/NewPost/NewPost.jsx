import { useState } from "react";
import styles from "./NewPost.module.css";

const NewPost = () => {
  const [body, setBody] = useState("");
  function changeBodyHandler(e) {
    setBody(e.target.value);
  }

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={changeBodyHandler}
        ></textarea>
      </p>
      <p>{body}</p>
      <p>
        <label htmlFor="name">Name</label>
        <textarea name="" id="name" required></textarea>
      </p>
    </form>
  );
};

export default NewPost;
