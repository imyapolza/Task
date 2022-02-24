import React from "react";
import RootModal from "./components/modal/RootModal/RootModal.jsx";
import { useDispatch } from "react-redux";
import { OrganizationsTable } from "./components/organizations/OrganizationsTable/OrganizationsTable.jsx";
import { hideModal, showModal } from "./redux/actionCreators/modal.js";
import { addOrganization } from "./redux/actionCreators/organizations.js";

function App() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      showModal({
        modalType: "ADD_COMPANY_MODAL",
        modalProps: {
          onSubmit: (payload) => {
            dispatch(addOrganization(payload));
            dispatch(hideModal());
          },
        },
      })
    );
  };

  return (
    <div className="App">
      <button onClick={handleAdd} className="add-button">
        Добавить
      </button>

      <OrganizationsTable />
      <RootModal />
    </div>
  );
}

export default App;
