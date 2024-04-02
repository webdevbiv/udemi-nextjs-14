const NewPost = () => {
  return (
    <form>
      <p>
        <label htmlFor="body"></label>
        <textarea id="body" required rows={3}></textarea>
      </p>
      <p>
        <label htmlFor="name"></label>
        <textarea name="" id="name" required></textarea>
      </p>
    </form>
  );
};

export default NewPost;
