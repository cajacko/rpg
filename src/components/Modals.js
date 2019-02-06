import React, { useState } from "react";
import ActionModal from "./ActionModal";
import AddModal from "./AddModal";

const Modals = ({ onClose, character, ...props }) => {
  const [type, setType] = useState(props.type);
  const [modalProps, setModalProps] = useState(props.modalProps || {});

  switch (type) {
    case "action":
      return (
        <ActionModal
          character={character}
          onClose={onClose}
          {...modalProps}
          onEdit={id => {
            setType("add");
            setModalProps({ id });
          }}
        />
      );
    case "add":
      return (
        <AddModal
          onClose={onClose}
          {...modalProps}
          showActionModal={id => {
            setType("action");
            setModalProps({ id });
          }}
        />
      );
    default:
      throw new Error("Invalid modal type given");
  }
};

export default Modals;
