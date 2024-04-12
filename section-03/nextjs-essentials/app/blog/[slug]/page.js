import Link from "next/link";

const BlogPostPage = ({ params }) => {
  console.log(params);
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostPage;
