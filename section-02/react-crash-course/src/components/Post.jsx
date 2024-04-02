const names = ["Dima", "Alex", "Kate"];

function Post() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const chosenName = names[randomIndex];

  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js is awesome</p>
    </div>
  );
}

export default Post;
