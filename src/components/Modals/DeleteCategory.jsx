import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../..";
import { deleteCategory } from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const DeleteCategory = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [categoryId, setCategoryId] = useState("");

  const removeCategory = () => {
    deleteCategory(categoryId).then((data) => onHide());
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
          Выберите категорию для удаления
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <DropdownToggle className="w-50">
              {device.selectedCategory.name || "Выберите категорию"}
            </DropdownToggle>
            <DropdownMenu className="w-50">
              {device.categories.map((category) => (
                <DropdownItem
                  key={category.id}
                  onClick={() => {
                    device.setSelectedCategory(category);
                    setCategoryId(category.id);
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
        <Button variant="outline-dark" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-danger" onClick={removeCategory}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default DeleteCategory;
