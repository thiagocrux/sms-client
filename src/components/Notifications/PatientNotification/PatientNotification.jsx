import React from "react";
import { useHistory, useLocation } from "react-router";

import Button from "../../Common/Button/Button";
import Tabs from "../../Notifications/Tabs/Tabs";

import { formatCPF, formatSUSCardNumber } from "../../../utils/dataFormatter";

import styles from "./PatientNotification.module.css";

function PatientNotification() {
  const { container, divider, label, item } = styles;
  const history = useHistory();
  const location = useLocation();
  const { state } = location;

  console.log("----------------------");
  console.log("PATIENT NOTIFICATION: " + state);

  const { susCardNumber, cpf, name, socialName } = state;

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
      <Tabs patient={state} />
    </div>
  );
}

export default PatientNotification;
