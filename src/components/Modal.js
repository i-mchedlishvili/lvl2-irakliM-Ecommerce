import React, { useState } from "react";
import Products from "./views/Products";
import { Button } from "@material-ui/core";
import Modal from "react-modal";

function ModalTab() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalIsOpen(true)}
      >
        Add Item
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ overlay: { backgroundColor: "gray" } }}
      >
          
        <Button onClick={() => setModalIsOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}

export default ModalTab;
