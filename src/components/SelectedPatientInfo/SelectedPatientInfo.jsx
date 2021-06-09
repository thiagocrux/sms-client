import React from "react";
import { useHistory } from "react-router";
import {
  formatCPF,
  formatDate,
  formatPhoneNumber,
  formatSUSCardNumber,
} from "../../utils/dataFormatter";

import Button from "../Common/Button/Button";
import Heading from "../Layout/Heading/Heading";
import Divider from "../Layout/Form/Divider/Divider";
import Tabs from "../Notifications/Tabs/Tabs";

import style from "./SelectedPatientInfo.module.css";

function SelectedPatientInfo({ patientInfo }) {
  const {
    susCardNumber,
    cpf,
    name,
    socialName,
    birthDate,
    gender,
    nationality,
    motherName,
    email,
    phone,
  } = patientInfo;
  const history = useHistory();

  return (
    <div className={style.selectedPatientContainer}>
      <Divider>
        <Heading type="secondary">Informações do paciente selecionado</Heading>
        <div className={style.patientInfo}>
          <p>
            <strong>SUS:</strong> {formatSUSCardNumber(susCardNumber)}
          </p>

          <p>
            <strong>CPF:</strong> {formatCPF(cpf)}
          </p>
          <p>
            <strong>{socialName ? "Nome social" : "Nome:"}</strong>{" "}
            {socialName !== "" ? socialName : name}
          </p>
          <p>
            <strong>Data de nascimento:</strong> {formatDate(birthDate)}
          </p>
          <p>
            <strong>Sexo:</strong> {gender}
          </p>
          <p>
            <strong>Nacionalidade:</strong> {nationality}
          </p>
          <p>
            <strong>E-mail:</strong> {email}
          </p>
          <p>
            <strong>Telefone:</strong> {formatPhoneNumber(phone)}
          </p>
          <p>
            <strong>Nome da mãe:</strong> {motherName}
          </p>
        </div>
      </Divider>
      <Button
        action="submit"
        type="button"
        click={() => history.push("/notifications")}
      >
        Escolher outro paciente
      </Button>
      <Tabs patient={patientInfo} />
    </div>
  );
}

export default SelectedPatientInfo;
