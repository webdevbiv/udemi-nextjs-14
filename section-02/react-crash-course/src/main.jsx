import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./routes/Posts/Posts.jsx";
import { loader as postsLoader } from "./routes/Posts/loader.js";
import { loader as postDetailsLoader } from "./components/PostDetails/loader.js";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost from "./routes/NewPost/NewPost.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";

import "./index.css";
import { action as newPostAction } from "./routes/NewPost/actions.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "create-post", element: <NewPost />, action: newPostAction },
          {
            path: ":id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
