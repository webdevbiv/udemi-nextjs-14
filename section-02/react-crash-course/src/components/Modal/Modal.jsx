import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
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
