import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  z-index: 9001;
  opacity: 0;
  appearance: none;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0000002e;
  display: flex;
  flex-direction: column;
  z-index: 9000;
  align-items: center;
  justify-content: center;
`;

const ModalChild = styled.div`
  background-color: white;
  ${({ noFlex }) => (noFlex ? "" : "flex: 1;")}
  box-shadow: 3px 3px 6px #00000061;
  z-index: 9002;
  max-width: 500px;
  max-height: 100vh;
  min-width: 300px;
  width: 100%;
  overflow: scroll;
  position: relative;
`;

const render = ({ children }) => <ModalChild>{children}</ModalChild>;

const Modal = ({ children, onClose }) => {
  const button = onClose ? <Button onClick={onClose} /> : null;

  return ReactDOM.createPortal(
    <Container>
      {button}
      {typeof children === "function" ? (
        children(render)
      ) : (
        <ModalChild noFlex>{children}</ModalChild>
      )}
    </Container>,
    document.getElementById("modal")
  );
};

export default Modal;
