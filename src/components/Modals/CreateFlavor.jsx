import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../..";
import { createFlavor } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateFlavor = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");

  const addFlavor = () => {
    const formData = new FormData();
    formData.append("name", name);
    createFlavor(formData).then((data) => onHide());
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый вкус
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите вкус"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addFlavor}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateFlavor;
