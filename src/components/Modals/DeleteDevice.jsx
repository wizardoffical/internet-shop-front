import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../..";
import { deleteDevice } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const DeleteDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [deviceId, setDeviceId] = useState("");

  const removeDevice = () => {
    deleteDevice(deviceId).then((data) => onHide());
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
          Выберите товар для удаления
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <DropdownToggle className="w-50">
              {device.selectedDevice.name || "Выберите товар"}
            </DropdownToggle>
            <DropdownMenu className="w-50">
              {device.devices.map((item) => (
                <DropdownItem
                  key={item.id}
                  onClick={() => {
                    device.setSelectedDevice(item);
                    setDeviceId(item.id);
                  }}
                >
                  {item.name}
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
        <Button variant="outline-danger" onClick={removeDevice}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteDevice;
