import React from "react";
import { useSelector } from "react-redux";
import AddCompanyModal from "../AddCompanyModal/AddCompanyModal.jsx";
import styles from "./RootModal.module.css";

const modalComponents = {
  ADD_COMPANY_MODAL: AddCompanyModal,
};

const RootModal = () => {
  const { modalType, modalProps } = useSelector((state) => state.modal);

  if (!modalType) {
    return null;
  }

  const Modal = modalComponents[modalType];

  return (
    <div className={styles.container}>
      <Modal {...modalProps} />
    </div>
  );
};

export default RootModal;
