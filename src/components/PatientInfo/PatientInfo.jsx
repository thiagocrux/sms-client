import React from "react";
import { useHistory, useLocation } from "react-router";

import Button from "../Common/Button/Button";
import { formatCPF, formatSUSCardNumber } from "../../utils/dataFormatter";

import styles from "./PatientInfo.module.css";

function PatientInfo() {
  const { container, divider, label, item } = styles;
  const history = useHistory();
  const location = useLocation();
  const { state } = location;
  const { name, socialName, susCardNumber, cpf } = state;

  console.log("[PATIENT INFO]: " + state);
  return (
    <div>
      <div className={container}>
        <div className={divider}>
          <span className={label}>SUS</span>
          <span className={item}>{formatSUSCardNumber(susCardNumber)}</span>
        </div>
        <div className={divider}>
          <span className={label}>Nome</span>
          <span className={item}>{socialName !== "" ? socialName : name}</span>
        </div>
        <div className={divider}>
          <span className={label}>CPF</span>
          <span className={item}>{formatCPF(cpf)}</span>
        </div>
      </div>
      <Button action="submit" type="button" click={() => history.goBack()}>
        Escolher outro paciente
      </Button>
    </div>
  );
}

export default PatientInfo;
