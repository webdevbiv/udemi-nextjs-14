import PropTypes from "prop-types";

import styles from "./Post.module.css";

function Post({ author, body }) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  );
}

Post.propTypes = {
  author: PropTypes.any,
  body: PropTypes.any,
};

export default Post;
