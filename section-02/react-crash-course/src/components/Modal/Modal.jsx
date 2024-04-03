import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      navigate("/");
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
