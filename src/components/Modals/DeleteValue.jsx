import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../..";
import { deleteValue } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const DeleteValue = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [valueId, setValueId] = useState("");

  const removeValue = () => {
    deleteValue(valueId).then((data) => onHide());
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
          Выберите объект для удаления
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <DropdownToggle className="w-50">
              {device.selectedValue.name || "Выберите объем"}
            </DropdownToggle>
            <DropdownMenu className="w-50">
              {device.value.map((value) => (
                <DropdownItem
                  key={value.id}
                  onClick={() => {
                    device.setSelectedValue(value);
                    setValueId(value.id);
                  }}
                >
                  {value.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-danger" onClick={removeValue}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteValue;
