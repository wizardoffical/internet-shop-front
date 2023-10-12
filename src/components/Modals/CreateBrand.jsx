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
import { fetchCategory, createBrand } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateBrand = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchCategory().then((data) => device.setCategories(data));
  }, []);

  const addBrand = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryId", device.selectedCategory.id);
    createBrand(formData).then((data) => onHide());
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
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите название бренда"}
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
                  onClick={() => device.setSelectedCategory(category)}
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
        <Button variant="outline-success" onClick={() => addBrand()}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBrand;
