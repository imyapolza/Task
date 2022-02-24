import React from "react";
import { useSelector } from "react-redux";
import { OrganizationsTableRow } from "../OrganizationsTableRow/OrganizationsTableRow.jsx";
import styles from "./OrganizationsTable.module.css";

export const OrganizationsTable = () => {
  const { organizations } = useSelector((state) => state.organizations);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Адрес</th>
          <th>ОГРН</th>
          <th>ИНН</th>
          <th>Дата регистрации</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {organizations.map((organization) => (
          <OrganizationsTableRow
            key={organization.id}
            organization={organization}
          />
        ))}
      </tbody>
    </table>
  );
};
