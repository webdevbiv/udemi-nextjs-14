import { Link, Form } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

import styles from "./NewPost.module.css";

const NewPost = () => {
  // const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("");

  // const navigate = useNavigate();

  // const handlePostChange = ({ target: { id, value } }) => {
  //   if (id === "body") {
  //     setBody(value);
  //   } else if (id === "name") {
  //     setAuthor(value);
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newPost = {
  //     body,
  //     author,
  //   };
  //   console.log(newPost);
  //   navigate("/");
  // };

  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <textarea type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

NewPost.propTypes = {};

export default NewPost;
