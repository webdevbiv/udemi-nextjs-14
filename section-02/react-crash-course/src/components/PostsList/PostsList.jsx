import Post from "../Post/Post";
import styles from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="John" body="React is awesome" />

      <Post author="Jane" body="Next.js is awesome" />
    </ul>
  );
}

export default PostsList;
