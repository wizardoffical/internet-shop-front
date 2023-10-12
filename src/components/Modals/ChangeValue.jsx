import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Row, Col } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useContext } from "react";
import { Context } from "../..";
import { changeValue, fetchCategory, fetchValue } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";

const ChangeValue = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchValue().then((data) => device.setValue(data));
    fetchCategory().then((data) => device.setCategories(data));
  }, []);

  let selectedCategory = null;

  const handleCategorySelection = (selectedCategoryId) => {
    selectedCategory = device.categories.find(
      ({ id }) => id === selectedCategoryId
    );
  };

  const updateValue = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryId", device.selectedCategory.id);
    changeValue(formData).then((data) => onHide());
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
          Изменить объем
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <DropdownToggle>
              {device.selectedValue.name || "Выберите объем для изменения"}
            </DropdownToggle>
            <DropdownMenu>
              {device.value.map((value) => (
                <DropdownItem
                  key={value.id}
                  onClick={() => device.setSelectedValue(value)}
                >
                  {value.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Form.Control
            placeholder={"Введите объем"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Dropdown className="mt-3">
            <DropdownToggle>
              {device.selectedCategory.name || "Выберите категорию"}
            </DropdownToggle>
            <DropdownMenu>
              {device.categories.map((category) => (
                <DropdownItem
                  key={category.id}
                  onClick={() => {
                    device.setSelectedCategory(category);
                    handleCategorySelection(category.id);
                  }}
                >
                  {category.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={updateValue}>
          Изменить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ChangeValue;
