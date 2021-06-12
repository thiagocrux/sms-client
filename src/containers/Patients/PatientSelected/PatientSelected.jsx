import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import { formatCPF, formatSUSCardNumber } from "../../utils/dataFormatter";
import Button from "../../components/Common/Button/Button";
import ExamsList from "../../containers/ExamsList/ExamsList";
import MonitoringsList from "../../containers/MonitoringsList/MonitoringsList";
import TreatmentsList from "../../containers/TreatmentsList/TreatmentsList";

import styles from "./PatientSelected.module.css";

function PatientInfo() {
  const [patientExams, setPatientExams] = useState([]);
  const [patientMonitorings, setPatientMonitorings] = useState([]);
  const [patientTreatments, setPatientTreatments] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;
  const { name, socialName, susCardNumber, cpf } = state;
  const patientID = state._id;

  const { container, divider, label, item } = styles;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/patients/${patientID}/exams`)
      .then((response) => {
        console.log(response.data.exams);
        setPatientExams(response.data.exams);
      });
  }, [patientID]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/patients/${patientID}/monitorings`)
      .then((response) => {
        console.log(response.data.monitorings);
        setPatientMonitorings(response.data.monitorings);
      });
  }, [patientID]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/patients/${patientID}/treatments`)
      .then((response) => {
        console.log(response.data.treatments);
        setPatientTreatments(response.data.treatments);
      });
  }, [patientID]);

  console.log();

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
        <Button action="submit" type="button" click={() => history.goBack()}>
          Escolher outro paciente
        </Button>
      </div>
      {/* <ExamsList exams={patientExams} />
      <MonitoringsList monitorings={patientMonitorings} /> */}
      <TreatmentsList treatments={patientTreatments} />
    </div>
  );
}

export default PatientInfo;
