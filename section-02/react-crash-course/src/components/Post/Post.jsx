import PropTypes from "prop-types";

import styles from "./Post.module.css";
import { Link } from "react-router-dom";

function Post({ id, author, body }) {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

Post.propTypes = {
  id: PropTypes.any,
  author: PropTypes.any,
  body: PropTypes.any,
};

export default Post;
