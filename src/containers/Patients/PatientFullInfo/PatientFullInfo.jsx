import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';
import { useParams, useHistory } from 'react-router-dom';
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import {
  formatDateTime,
  formatCPF,
  formatDate,
  formatSUSCardNumber,
  formatPhoneNumber,
} from '../../../utils/dataFormatter';

import Button from '../../../components/Common/Buttons/Button/Button';
import ButtonReturn from '../../../components/Common/Buttons/ButtonReturn/ButtonReturn';
import Card from '../../../components/Common/Card/Card';
import Heading from '../../../components/Common/Heading/Heading';
import Info from '../../../components/Common/Info/Info';
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
    <>
      <Heading size="huge" align="center" margin="big">
        Informações do paciente
      </Heading>
      <Card>
        <ButtonReturn link={`/patients/`} />
        <Heading size="medium" align="start" margin="small">
          Informações pessoais
        </Heading>
        <div className={style.personalInfoContainer}>
          <Info
            class="regular"
            label="Número do cartão do SUS"
            info={
              patient.susCardNumber &&
              formatSUSCardNumber(patient.susCardNumber)
            }
          />
          <Info class="regular" label="Nome" info={patient.name} />
          <Info
            class="regular"
            label="CPF"
            info={patient.cpf && formatCPF(patient.cpf)}
          />
          <Info
            class="regular"
            label="Data de nascimento"
            info={patient.birthDate && formatDate(patient.birthDate)}
          />
          <Info
            class="regular"
            label="Nome social"
            info={patient.socialName || 'Não declarado'}
          />
          <Info
            class="regular"
            label="Telefone"
            info={patient.phone && formatPhoneNumber(patient.phone)}
          />
          <Info class="regular" label="E-mail" info={patient.email} />
          <Info class="regular" label="Sexo" info={patient.sex} />
          <Info class="regular" label="Gênero" info={patient.gender} />
          <Info class="regular" label="Sexualidade" info={patient.sexuality} />
          <Info
            class="regular"
            label="Nacionalidade"
            info={patient.nationality}
          />
          <Info class="regular" label="Nome da mãe" info={patient.motherName} />
          <Info
            class="regular"
            label="Nome do pai"
            info={patient.fatherName ? patient.fatherName : 'Não declarado'}
          />
          <Info
            class="regular"
            label="Tipo de notificação"
            info={patient.notificationType}
          />
          <Info
            class="regular"
            label="Paciente falecido?"
            info={patient.isDeceased ? 'Sim' : 'Não'}
          />
        </div>
        <ThematicBreak />
        <Heading size="medium" align="start" margin="small">
          Informações de endereço
        </Heading>
        <div className={style.addressInfoContainer}>
          <Info class="regular" label="CEP" info={patient.zipCode} />
          <Info class="regular" label="Estado" info={patient.state} />
          <Info class="regular" label="Cidade" info={patient.city} />
          <Info class="regular" label="Bairro" info={patient.neighbourhood} />
          <Info class="regular" label="Logradouro" info={patient.street} />
          <Info
            class="regular"
            label="Número da residência"
            info={patient.houseNumber}
          />
          <Info
            class="regular"
            label="Complemento"
            info={patient.complement || 'Não declarado'}
          />
        </div>
        <ThematicBreak />
        <Heading size="medium" align="start" margin="small">
          Informações de cadastro
        </Heading>
        <div className={style.registerInfoContainer}>
          <Info
            class="regular"
            label="Data de criação"
            info={patient.createdAt && formatDateTime(patient.createdAt)}
          />
          <Info
            class="regular"
            label="Data de atualização"
            info={patient.updatedAt && formatDateTime(patient.updatedAt)}
          />
        </div>
        <div className={style.patientControls}>
          <Button
            class="success"
            size="medium"
            click={() => history.push(`/patients/${patientID}/edit`)}
          >
            <PenFill />
            Editar usuário
          </Button>
          <Button
            class="danger"
            size="medium"
            click={() => console.log('Delete button clicked!')}
          >
            <TrashFill />
            Excluir usuário
          </Button>
        </div>
      </Card>
    </>
  );
}
