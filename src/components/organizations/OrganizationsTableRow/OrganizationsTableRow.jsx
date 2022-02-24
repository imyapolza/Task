import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteOrganization,
  editOrganization,
} from "../../../redux/actionCreators/organizations.js";
import { setOrganizationByINN } from "../../../redux/asyncActions/organizations.js";
import InlineEdit from "../../form/InlineEdit/InlineEdit.jsx";
import styles from "./OrganizationsTableRow.module.css";

export const OrganizationsTableRow = ({ organization }) => {
  const { id, name, address, inn, ogrn, createdAt } = organization;
  const dispatch = useDispatch();

  const handleChangeAddress = (evt) => {
    dispatch(
      editOrganization({
        ...organization,
        address: evt.target.value,
      })
    );
  };

  const handleDelete = (evt) => {
    dispatch(deleteOrganization(id));
  };

  const handleFill = () => {
    dispatch(
      setOrganizationByINN({ id: organization.id, inn: organization.inn })
    );
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <InlineEdit
          className={styles.addressInput}
          value={address}
          onChange={handleChangeAddress}
        />
      </td>
      <td>{ogrn}</td>
      <td>{inn}</td>
      <td>{new Date(createdAt).toLocaleString()}</td>
      <td>
        <div className={styles.actions}>
          <button onClick={handleFill}>Заполнить</button>
          <button onClick={handleDelete}>Удалить</button>
        </div>
      </td>
    </tr>
  );
};
