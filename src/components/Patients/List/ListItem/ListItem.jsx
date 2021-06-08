import React from "react";
import { PenFill, PersonLinesFill, XCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import {
  formatCPF,
  formatDate,
  formatSUSCardNumber,
} from "../../../../utils/dataFormatter";

import style from "./ListItem.module.css";

export default function ListItem({ patient }) {
  return (
    <Link
      to={{
        pathname: `/notifications/patients/${patient._id}/`,
        state: patient,
      }}
      className={style.listItem}
    >
      <span className={style.innerDivider}>
        {formatSUSCardNumber(patient.susCardNumber)}
      </span>
      <span className={style.innerDivider}>{formatCPF(patient.cpf)}</span>
      <span className={style.innerDivider}>
        {patient.socialName ? patient.socialName : patient.name}
      </span>
      <span className={style.innerDivider}>
        {formatDate(patient.birthDate)}
      </span>
      <span className={style.controls}>
        <PersonLinesFill className={style.icon} />
        <PenFill className={style.icon} />
        <XCircleFill className={style.icon} />
      </span>
    </Link>
  );
}
