import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';
import { useParams, useHistory } from 'react-router-dom';
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import {
  formatDateTime,
  formatCPF,
  formatSUSCardNumber,
  formatPhoneNumber,
} from '../../../utils/dataFormatter';

import Heading from '../../../components/Common/Heading/Heading';
import Divider from '../../../components/Layout/Form/Divider/Divider';
import ThematicBreak from '../../../components/Common/ThematicBreak/ThematicBreak';

import style from './PatientFullInfo.module.css';

export default function PatientFullInfo() {
  const [patient, setPatient] = useState({});
  const { patientID } = useParams();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/patients/${patientID}`)
      .then((response) => setPatient(response.data.patient));
  }, [patientID]);

  return (
    <div className={style.infoContainer}>
      <Heading type="primary">Informações do usuário</Heading>
      <Divider>
        <Heading type="secondary">Informações pessoais</Heading>
        <div className={style.personalInfoContainer}>
          <div className={style.info}>
            <span>Número do cartão do SUS</span>
            <p>
              {patient.susCardNumber &&
                formatSUSCardNumber(patient.susCardNumber)}
            </p>
          </div>
          <div className={style.info}>
            <span>Nome</span>
            <p>{patient.name}</p>
          </div>
          <div className={style.info}>
            <span>cpf</span>
            <p>{patient.cpf && formatCPF(patient.cpf)}</p>
          </div>
          <div className={style.info}>
            <span>Nome social</span>
            <p>{patient.socialName || 'Não declarado'}</p>
          </div>
          <div className={style.info}>
            <span>Data de nascimento</span>
            <p>{patient.birthDate}</p>
          </div>
          <div className={style.info}>
            <span>Telefone</span>
            <p>{patient.phone && formatPhoneNumber(patient.phone)}</p>
          </div>
          <div className={style.info}>
            <span>E-mail</span>
            <p>{patient.email}</p>
          </div>
          <div className={style.info}>
            <span>Sexo</span>
            <p>{patient.sex}</p>
          </div>
          <div className={style.info}>
            <span>Gênero</span>
            <p>{patient.gender}</p>
          </div>
          <div className={style.info}>
            <span>Sexualidade</span>
            <p>{patient.sexuality}</p>
          </div>
          <div className={style.info}>
            <span>Nacionalidade</span>
            <p>{patient.nationality}</p>
          </div>
          <div className={style.info}>
            <span>Nome da mãe</span>
            <p>{patient.motherName}</p>
          </div>
        </div>
        <ThematicBreak />
        <Heading type="secondary">Informações de endereço</Heading>
        <div className={style.addressInfoContainer}>
          <div className={style.info}>
            <span>CEP</span>
            <p>{patient.zipCode}</p>
          </div>
          <div className={style.info}>
            <span>Estado</span>
            <p>{patient.state}</p>
          </div>
          <div className={style.info}>
            <span>Cidade</span>
            <p>{patient.city}</p>
          </div>
          <div className={style.info}>
            <span>Bairro</span>
            <p>{patient.neighbourhood}</p>
          </div>
          <div className={style.info}>
            <span>Logradouro</span>
            <p>{patient.street}</p>
          </div>
          <div className={style.info}>
            <span>Número da residência</span>
            <p>{patient.houseNumber}</p>
          </div>
          <div className={style.info}>
            <span>Complemento</span>
            <p>{patient.complement || 'Não declarado'}</p>
          </div>
        </div>
        <ThematicBreak />
        <Heading type="secondary">Informações de cadastro</Heading>
        <div className={style.registerInfoContainer}>
          <div className={style.info}>
            <span>Data de criação</span>
            <p>{formatDateTime(patient.createdAt)}</p>
          </div>
          <div className={style.info}>
            <span>Data de atualização</span>
            <p>{formatDateTime(patient.updatedAt) || 'Nunca foi atualizado'}</p>
          </div>
        </div>
        <div className={style.patientControls}>
          <button
            className={`${style.button} ${style.edit}`}
            onClick={() => history.push(`/patients/${patientID}/edit`)}
          >
            <PenFill className={style.icon} />
            Editar usuário
          </button>
          <button
            className={`${style.button} ${style.delete}`}
            onClick={() => console.log('Delete button clicked!')}
          >
            <TrashFill className={style.icon} />
            Excluir usuário
          </button>
        </div>
      </Divider>
    </div>
  );
}
