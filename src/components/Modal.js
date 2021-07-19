import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import Modal from "react-modal";
import "../App.css";
import FormProvider from "./FormProvider";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CloseIcon from "@material-ui/icons/Close";

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
        style={{ height: "48px" }}
      >
        <AddShoppingCartIcon />
        Add Item
      </Button>

      <Button variant="contained" color="primary" component={Box} m={3}>
        <HomeIcon />
        <Link component={Button} color="inherit" to="/">
          HOME
        </Link>
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
          <CloseIcon />
          close
        </Button>
        <FormProvider />
      </Modal>
    </>
  );
}

export default ModalTab;
