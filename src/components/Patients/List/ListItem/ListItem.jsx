import React from "react";
import { PenFill, PersonLinesFill, XCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import {
  formatCPF,
  formatDate,
  formatSUSCardNumber,
} from "../../../../utils/dataFormatter";

import style from "./ListItem.module.css";

export default function ListItem({ patient, path }) {
  const { _id, susCardNumber, cpf, name, socialName, birthDate } = patient;
  const { listItem, innerDivider, icon, controls } = style;
  const url = path === "/patients" ? "" : "/notifications";

  return (
    <Link
      to={{
        pathname: `${url}/patients/${_id}/`,
        state: patient,
      }}
      className={listItem}
    >
      <span className={innerDivider}>{formatSUSCardNumber(susCardNumber)}</span>
      <span className={innerDivider}>{formatCPF(cpf)}</span>
      <span className={innerDivider}>{socialName ? socialName : name}</span>
      <span className={innerDivider}>{formatDate(birthDate)}</span>
      <span className={controls}>
        <PersonLinesFill className={icon} />
        <PenFill className={icon} />
        <XCircleFill className={icon} />
      </span>
    </Link>
  );
}
