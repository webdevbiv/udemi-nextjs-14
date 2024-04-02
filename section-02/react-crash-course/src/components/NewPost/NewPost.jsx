import PropTypes from "prop-types";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.onBodyChange}
        ></textarea>
      </p>
      <p>{props.body}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea
          name=""
          id="name"
          required
          onChange={props.onNameChange}
        ></textarea>
      </p>
    </form>
  );
};

NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  body: PropTypes.string,
};

export default NewPost;
