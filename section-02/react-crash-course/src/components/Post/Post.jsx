import styles from "./Post.module.css";
// const names = ["Dima", "Alex", "Kate"];

function Post(props) {
  const { author, body } = props;
  // const randomIndex = Math.floor(Math.random() * names.length);
  // const chosenName = names[randomIndex];

  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  );
}

export default Post;
