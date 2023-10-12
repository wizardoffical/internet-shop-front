import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Row } from "react-bootstrap";
import CreateBrand from "../../components/Modals/CreateBrand";
import CreateDevice from "../../components/Modals/CreateDevice";
import CreateValue from "../../components/Modals/CreateValue";
import CreateCategory from "../../components/Modals/CreateCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import CreateType from "../../components/Modals/CreateType";
import CreateFlavor from "../../components/Modals/CreateFlavor";
import DeleteFlavor from "../../components/Modals/DeleteFlavor";
import DeleteValue from "../../components/Modals/DeleteValue";
import DeleteType from "../../components/Modals/DeleteType";
import DeleteCategory from "../../components/Modals/DeleteCategory";
import DeleteBrand from "../../components/Modals/DeleteBrand";
import DeleteDevice from "../../components/Modals/DeleteDevice";
import ChangeValue from "../../components/Modals/ChangeValue";

const Admin = observer(() => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [flavorVisible, setFlavorVisible] = useState(false);
  const [valueVisible, setValueVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [deleteTypeVisible, setDeleteTypeVisible] = useState(false);
  const [deleteBrandVisible, setDeleteBrandVisible] = useState(false);
  const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false);
  const [deleteCategoryVisible, setDeleteCategoryVisible] = useState(false);
  const [deleteValueVisible, setDeleteValueVisible] = useState(false);
  const [deleteFlavorVisible, setDeleteFlavorVisible] = useState(false);
  const [changeValueVisible, setChangeValueVisible] = useState(false);

  return (
    <div className="Admin">
      <Navbar />
      <div className="container">
        <div className="buttonsWrapper">
          <div className="settingsRow">
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setDeviceVisible(true)}
            >
              Добавить товар
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setDeleteDeviceVisible(true)}
            >
              Удалить товар
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setDeviceVisible(true)}
            >
              Обновить товар
            </Button>
          </div>

          <div className="settingsRow">
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setTypeVisible(true)}
            >
              Добавить тип
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setDeleteTypeVisible(true)}
            >
              Удалить тип
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setTypeVisible(true)}
            >
              Обновить тип
            </Button>
          </div>

          <div className="settingsRow">
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setBrandVisible(true)}
            >
              Добавить бренд
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setDeleteBrandVisible(true)}
            >
              Удалить бренд
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setBrandVisible(true)}
            >
              Обновить бренд
            </Button>
          </div>
          <div className="settingsRow">
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setCategoryVisible(true)}
            >
              Добавить категорию
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setDeleteCategoryVisible(true)}
            >
              Удалить категорию
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2 w-50"
              onClick={() => setCategoryVisible(true)}
            >
              Обновить категорию
            </Button>
          </div>

          <div className="settingsRow">
            <Button
              variant="outline-dark"
              className="mt-2 p-2"
              onClick={() => setFlavorVisible(true)}
            >
              Добавить вкус
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2"
              onClick={() => setDeleteFlavorVisible(true)}
            >
              Удалить вкус
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2"
              onClick={() => setDeleteFlavorVisible(true)}
            >
              Обновить вкус
            </Button>
          </div>
          <div className="settingsRow">
            <Button
              variant="outline-dark"
              className="mt-2 p-2"
              onClick={() => setValueVisible(true)}
            >
              Добавить объем
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2"
              onClick={() => setDeleteValueVisible(true)}
            >
              Удалить объем
            </Button>
            <Button
              variant="outline-dark"
              className="mt-2 p-2"
              onClick={() => setChangeValueVisible(true)}
            >
              Изменить объем
            </Button>
          </div>

          <CreateBrand
            show={brandVisible}
            onHide={() => setBrandVisible(false)}
          />
          <CreateDevice
            show={deviceVisible}
            onHide={() => setDeviceVisible(false)}
          />
          <CreateCategory
            show={categoryVisible}
            onHide={() => setCategoryVisible(false)}
          />
          <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
          <CreateValue
            show={valueVisible}
            onHide={() => setValueVisible(false)}
          />
          <CreateFlavor
            show={flavorVisible}
            onHide={() => setFlavorVisible(false)}
          />
          <DeleteFlavor
            show={deleteFlavorVisible}
            onHide={() => setDeleteFlavorVisible(false)}
          />
          <DeleteValue
            show={deleteValueVisible}
            onHide={() => setDeleteValueVisible(false)}
          />
          <DeleteType
            show={deleteTypeVisible}
            onHide={() => setDeleteTypeVisible(false)}
          />
          <DeleteCategory
            show={deleteCategoryVisible}
            onHide={() => setDeleteCategoryVisible(false)}
          />
          <DeleteBrand
            show={deleteBrandVisible}
            onHide={() => setDeleteBrandVisible(false)}
          />
          <DeleteDevice
            show={deleteDeviceVisible}
            onHide={() => setDeleteDeviceVisible(false)}
          />
          <ChangeValue
            show={changeValueVisible}
            onHide={() => setChangeValueVisible(false)}
          />
        </div>
      </div>
    </div>
  );
});

export default Admin;
