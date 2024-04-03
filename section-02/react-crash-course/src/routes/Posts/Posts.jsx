import { Outlet } from "react-router-dom";
import PostsList from "../../components/PostsList/PostsList";

import "./Posts.css";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
