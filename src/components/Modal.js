import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import Modal from "react-modal";
import "../App.css";
import Form from "./Formik";

function ModalTab() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        component={Box}
        m={3}
        onClick={() => setModalIsOpen(true)}
      >
        Add Item
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ overlay: { backgroundColor: "gray" } }}
      >
        <Button
          component={Box}
          mt={1}
          mb={2}
          variant="contained"
          color="primary"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </Button>
        <Form />
      </Modal>
    </>
  );
}

export default ModalTab;
