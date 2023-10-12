import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../..";
import { createType } from "../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateType = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");

  const addType = () => {
    const formData = new FormData();
    formData.append("name", name);
    createType(formData).then((data) => onHide());
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
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите название типа"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateType;
