import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class Modal extends React.Component {
  onClick = event => {
    const id = event.target.id;
    if (id === "background") {
      this.props.cancel();
    }
  };

  render = () => {
    return (
      <div
        id="background"
        className={styles.modalBackground}
        onClick={this.onClick}
      >
        <div
          id="content"
          className={styles.modalContent}
          onClick={this.onClick}
        >
          <span className={styles.close} onClick={() => this.props.cancel()}>
            &times;
          </span>
          Do you want to delete the lesson?
          <div>
            <button className="btn" onClick={() => this.props.accept()}>
              Delete it
            </button>
            <button className="btn" onClick={() => this.props.cancel()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };
}

Modal.propTypes = {
  cancel: PropTypes.func.isRequired,
  accept: PropTypes.func.isRequired
};

export default Modal;
