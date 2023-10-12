import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../index";
import { Dropdown, Row, Col } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
  fetchCategory,
  fetchFlavor,
  fetchValue,
} from "./../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [sklad, setSklad] = useState(0);

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
    fetchTypes().then((data) => device.setTypes(data));
    fetchCategory().then((data) => device.setCategories(data));
    fetchFlavor().then((data) => device.setFlavors(data));
    fetchValue().then((data) => device.setValue(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("sklad", `${sklad}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("categoryId", device.selectedCategory.id);
    formData.append("flavorId", device.selectedFlavor.id);
    formData.append("valueId", device.selectedValue.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новый товар
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название товара"
            className="mb-3"
          />
          <Form>
            <span style={{ marginLeft: "3px" }}>Введите стоимость товара</span>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Введите стоимость товара"
              className="mb-3"
              type="number"
            />
            <span style={{ marginLeft: "3px" }}>
              Введите количесто товара на складе
            </span>
            <Form.Control
              value={sklad}
              onChange={(e) => setSklad(Number(e.target.value))}
              placeholder="Введите наличие на складе"
              className="mb-3"
              type="number"
            />

            <Dropdown className="mt-3">
              <DropdownToggle>
                {device.selectedBrand.name || "Выберите бренд"}
              </DropdownToggle>
              <DropdownMenu>
                {device.brands.map((brand) => (
                  <DropdownItem
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                  >
                    {brand.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Dropdown className="mt-3">
              <DropdownToggle>
                {device.selectedType.name || "Выберите тип"}
              </DropdownToggle>
              <DropdownMenu>
                {device.types.map((type) => (
                  <DropdownItem
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                  >
                    {type.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

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

            <Dropdown className="mt-3">
              <DropdownToggle>
                {device.selectedFlavor.name || "Выберите вкус"}
              </DropdownToggle>
              <DropdownMenu>
                {device.flavors.map((flavor) => (
                  <DropdownItem
                    key={flavor.id}
                    onClick={() => device.setSelectedFlavor(flavor)}
                  >
                    {flavor.name}{" "}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Dropdown className="mt-3">
              <DropdownToggle>
                {device.selectedValue.name || "Выберите объем"}
              </DropdownToggle>
              <DropdownMenu>
                {device.value.map((value) => (
                  <DropdownItem
                    key={value.id}
                    onClick={() => device.setSelectedValue(value)}
                  >
                    {value.name}{" "}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Form.Control className="mt-3" type="file" onChange={selectFile} />
            <hr />
            <Button className="outline-dark" onClick={addInfo}>
              Добавить новое свойство
            </Button>
            {info.map((i) => (
              <Row className="mt-4" key={i.number}>
                <Col md={4}>
                  <Form.Control
                    value={i.title}
                    onChange={(e) =>
                      changeInfo("title", e.target.value, i.number)
                    }
                    placeholder="Введите название свойства"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={i.description}
                    onChange={(e) =>
                      changeInfo("description", e.target.value, i.number)
                    }
                    placeholder="Введите описание свойства"
                  />
                </Col>
                <Col md={4}>
                  <Button
                    onClick={() => removeInfo(i.number)}
                    variant="outline-danger"
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={() => addDevice()}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default CreateDevice;
