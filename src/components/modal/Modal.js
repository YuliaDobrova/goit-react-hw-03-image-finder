import React, { Component } from "react";
import { ModalStyled } from "./ModalStyled";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onHandleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onHandleKeyDown);
  }

  onHandleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onHandleBackdrop = (e) => {
    if (e.currentTarget !== e.target) return false;
    this.props.onClose();
  };

  render() {
    return (
      <ModalStyled className="Overlay" onClick={this.onHandleBackdrop}>
        <div className="Modal">
          <img src={this.props.url} alt="Large img" />
        </div>
      </ModalStyled>
    );
  }
}

export default Modal;

