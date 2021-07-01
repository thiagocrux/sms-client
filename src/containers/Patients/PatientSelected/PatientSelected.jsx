import React from 'react';
import { useHistory } from 'react-router-dom';
import { formatCPF, formatSUSCardNumber } from '../../../utils/dataFormatter';
import { PencilFill, PersonLinesFill, TrashFill } from 'react-bootstrap-icons';

import Button from '@components/Common/Buttons/Button/Button';
import ButtonClose from '@components/Common/Buttons/ButtonClose/ButtonClose';
import Card from '@components/Common/Card/Card';
import Info from '@components/Common/Info/Info';

import style from './PatientSelected.module.css';

function PatientInfo({ patient }) {
  const history = useHistory();

  return (
    <div className={style.selectedPatientCard}>
      <Card>
        <ButtonClose click={() => history.push('/patients/')} />
        <div className={style.gridContainer}>
          <div className={style.header}>
            <h1 className={style.heading}>
              Informações do paciente selecionado
            </h1>
          </div>
          <div className={style.body}>
            <Info
              label="Número do cartão do SUS"
              info={formatSUSCardNumber(patient.susCardNumber)}
              class="highlight"
            />
            <Info label="CPF" info={formatCPF(patient.cpf)} class="highlight" />
            <Info label="Nome" info={patient.name} class="highlight" />
          </div>
          <div className={style.footer}>
            <Button
              size="medium"
              class="success"
              click={() => history.push(`/patients/${patient._id}/info`)}
            >
              <PersonLinesFill />
              Mais informações
            </Button>
            <Button
              size="medium"
              class="danger"
              click={() => history.push(`/patients/${patient._id}/edit`)}
            >
              <PencilFill />
              Editar paciente
            </Button>
            {/* <Button size="medium" class="danger" click={deletePatient}>
              <TrashFill />
              Excluir paciente
            </Button> */}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PatientInfo;
