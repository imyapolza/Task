import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../redux/actionCreators/modal.js";
import styles from "./AddCompanyModal.module.css";

const AddCompanyModal = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [companyData, setCompanyData] = useState({
    name: "",
    address: "",
    ogrn: "",
    inn: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      ...companyData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => dispatch(hideModal())}
      >
        &times;
      </button>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={companyData.name}
          onChange={({ target }) =>
            setCompanyData((current) => ({ ...current, name: target.value }))
          }
          type="text"
          placeholder="Наименование"
          required
        />
        <input
          className={styles.input}
          value={companyData.address}
          onChange={({ target }) =>
            setCompanyData((current) => ({ ...current, address: target.value }))
          }
          type="text"
          placeholder="Адрес"
          required
        />
        <input
          className={styles.input}
          value={companyData.ogrn}
          onChange={({ target }) =>
            setCompanyData((current) => ({ ...current, ogrn: target.value }))
          }
          type="text"
          placeholder="ОГРН"
          minLength="13"
          maxLength="13"
          pattern="[0-9]+"
          required
        />
        <input
          className={styles.input}
          value={companyData.inn}
          onChange={({ target }) =>
            setCompanyData((current) => ({ ...current, inn: target.value }))
          }
          type="text"
          placeholder="ИНН"
          minLength="12"
          maxLength="12"
          pattern="[0-9]+"
          required
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default AddCompanyModal;
