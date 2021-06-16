import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { formatCPF, formatSUSCardNumber } from '../../../utils/dataFormatter';
import {
  PencilFill,
  PersonLinesFill,
  TrashFill,
  X,
} from 'react-bootstrap-icons';

import style from './PatientSelected.module.css';

function PatientInfo({ patient }) {
  const history = useHistory();

  function deletePatient() {
    console.log(`Paciente "${patient._id}" deletado!`);
  }

  return (
    <>
      <div className={style.selectedPatientCard}>
        <button
          className={`${style.button} ${style.closeButton}`}
          onClick={() => history.push('/patients/')}
        >
          <X className={style.icon} />
        </button>
        <div className={style.innerContainer}>
          <div className={style.cardHeader}>
            <h1 className={style.heading}>
              Informações do paciente selecionado
            </h1>
          </div>
          <div className={style.cardBody}>
            <div className={style.infoContainer}>
              <span className={style.label}>Número do cartão do SUS</span>
              <span className={style.info}>
                {formatSUSCardNumber(patient.susCardNumber)}
              </span>
            </div>
            <div className={style.infoContainer}>
              <span className={style.label}>CPF</span>
              <span className={style.info}>{formatCPF(patient.cpf)}</span>
            </div>
            <div className={style.infoContainer}>
              <span className={style.label}>Nome</span>
              <span className={style.info}>
                {patient.socialName !== '' ? patient.socialName : patient.name}
              </span>
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
              onClick={() => history.push(`/patients/${patient._id}/edit`)}
            >
              <PencilFill className={style.icon} />
              Editar paciente
            </button>
            <button
              className={`${style.button} ${style.deleteButton}`}
              onClick={deletePatient}
            >
              <TrashFill className={style.icon} />
              Excluir paciente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientInfo;
