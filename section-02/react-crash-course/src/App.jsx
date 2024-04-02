import { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import PostsList from "./components/PostsList/PostsList";

import "./App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <MainHeader onCreatePost={toggleModal} />

      <main>
        <PostsList modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      </main>
    </>
  );
}

export default App;
