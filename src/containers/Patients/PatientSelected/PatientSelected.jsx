import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { formatCPF, formatSUSCardNumber } from '../../../utils/dataFormatter';
import {
  PencilFill,
  PersonLinesFill,
  Trash,
  TrashFill,
  X,
  XCircle,
  XCircleFill,
} from 'react-bootstrap-icons';

import ExamsList from '../../../containers/Notifications/NotificationList/ExamsList/ExamsList';
import MonitoringsList from '../../../containers/Notifications/NotificationList/MonitoringsList/MonitoringsList';
import TreatmentsList from '../../../containers/Notifications/NotificationList/TreatmentsList/TreatmentsList';

import style from './PatientSelected.module.css';

function PatientInfo() {
  const [patientExams, setPatientExams] = useState([]);
  const [patientMonitorings, setPatientMonitorings] = useState([]);
  const [patientTreatments, setPatientTreatments] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;
  const { name, socialName, susCardNumber, cpf } = state;
  const patientID = state._id;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/patients/${patientID}/exams`).then((response) => {
      console.log(response.data.exams);
      setPatientExams(response.data.exams);
    });
  }, [patientID]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/patients/${patientID}/monitorings`).then((response) => {
      console.log(response.data.monitorings);
      setPatientMonitorings(response.data.monitorings);
    });
  }, [patientID]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/patients/${patientID}/treatments`).then((response) => {
      console.log(response.data.treatments);
      setPatientTreatments(response.data.treatments);
    });
  }, [patientID]);

  function deletePatient() {
    console.log(`Paciente "${patientID}" deletado!`);
  }

  console.log();

  console.log('[PATIENT INFO]: ' + state);
  return (
    <>
      <div className={style.selectedPatientCard}>
        <button className={`${style.button} ${style.closeButton}`} onClick={() => history.goBack()}>
          <X className={style.icon} />
        </button>
        <div className={style.innerContainer}>
          <div className={style.cardHeader}>
            <h1 className={style.heading}>Informações do paciente selecionado</h1>
          </div>
          <div className={style.cardBody}>
            <div className={style.infoContainer}>
              <span className={style.label}>Número do cartão do SUS</span>
              <span className={style.info}>{formatSUSCardNumber(susCardNumber)}</span>
            </div>
            <div className={style.infoContainer}>
              <span className={style.label}>CPF</span>
              <span className={style.info}>{formatCPF(cpf)}</span>
            </div>
            <div className={style.infoContainer}>
              <span className={style.label}>Nome</span>
              <span className={style.info}>{socialName !== '' ? socialName : name}</span>
            </div>
          </div>
          <div className={style.cardFooter}>
            <button
              className={`${style.button} ${style.infoButton}`}
              onClick={() => history.goBack()}
            >
              <PersonLinesFill className={style.icon} />
              Mais informações
            </button>
            <button
              className={`${style.button} ${style.editButton}`}
              onClick={() => history.push(`/patients/${patientID}/edit`)}
            >
              <PencilFill className={style.icon} />
              Editar paciente
            </button>
            <button className={`${style.button} ${style.deleteButton}`} onClick={deletePatient()}>
              <TrashFill className={style.icon} />
              Excluir paciente
            </button>
          </div>
        </div>
      </div>

      {/* <ExamsList exams={patientExams} />
      <MonitoringsList monitorings={patientMonitorings} /> */}
      {/* <TreatmentsList treatments={patientTreatments} /> */}
    </>
  );
}

export default PatientInfo;
