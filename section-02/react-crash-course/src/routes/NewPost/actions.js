import { redirect } from "react-router-dom";

export async function action({ request }) {
  console.log(request);
  const formData = await request.formData();
  console.log(formData);
  const postData = Object.fromEntries(formData);
  console.log(postData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
