import PropTypes from "prop-types";
import styles from "./NewPost.module.css";

const NewPost = ({ onBodyChange, onNameChange, onCancel, body }) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={onBodyChange}
        ></textarea>
      </p>
      <p>{body}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea
          type="text"
          id="name"
          required
          onChange={onNameChange}
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
  onBodyChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  body: PropTypes.string,
};

export default NewPost;
