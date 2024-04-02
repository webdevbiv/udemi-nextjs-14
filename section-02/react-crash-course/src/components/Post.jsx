const names = ["Dima", "Alex", "Kate"];

function Post() {
  // Generate a random index based on the length of the names array
  const randomIndex = Math.floor(Math.random() * names.length);
  // Use the random index to select a name from the names array
  const chosenName = names[randomIndex];

  // Return a div that includes the chosen name
  return <div>{`Post by ${chosenName}`}</div>;
}

export default Post;
