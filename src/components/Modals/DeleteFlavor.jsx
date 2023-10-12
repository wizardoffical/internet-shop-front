import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../..";
import { deleteFlavor } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const DeleteFlavor = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [flavorId, setFlavorId] = useState("");

  const removeFlavor = () => {
    deleteFlavor(flavorId).then((data) => onHide());
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
          Выберите вкус для удаления
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <DropdownToggle className="w-50">
              {device.selectedFlavor.name || "Выберите вкус"}
            </DropdownToggle>
            <DropdownMenu className="w-50">
              {device.flavors.map((flavor) => (
                <DropdownItem
                  key={flavor.id}
                  onClick={() => {
                    device.setSelectedFlavor(flavor);
                    setFlavorId(flavor.id);
                  }}
                >
                  {flavor.name}
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
        <Button variant="outline-danger" onClick={removeFlavor}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteFlavor;
