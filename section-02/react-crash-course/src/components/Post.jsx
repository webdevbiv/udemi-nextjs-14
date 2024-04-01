const names = ["Dima", "Alex", "Kate"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return <div>Post</div>;
}

export default Post;
