export async function loader({ params }) {
  console.log(params);
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const data = await response.json();
  return data.post;
}
