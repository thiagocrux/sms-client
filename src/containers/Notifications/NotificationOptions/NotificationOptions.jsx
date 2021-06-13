import React from 'react';
import { useParams } from 'react-router-dom';
import { ClipboardPlus, DropletHalf, Eye } from 'react-bootstrap-icons';

import Heading from '../../../components/Common/Heading/Heading';
import Button from '../../../components/Common/Button/Button';

import style from './NotificationOptions.module.css';

export default function NotificationOptions({ isCreation, click }) {
  const { patientID } = useParams();
  const treatmentsURL = `/notifications/patients/${patientID}/treatments/new`;
  const examsURL = `/notifications/patients/${patientID}/monitorings/new`;
  const monitoringsURL = `/notifications/patients/${patientID}/exams/new`;

  /* isCreation
    ? (treatmentsURL = `/notifications/patients/${patientID}/treatments/new`)
    : (treatmentsURL = `/notifications/patients/${patientID}/treatments/`);
  isCreation
    ? (monitoringsURL = `/notifications/patients/${patientID}/monitorings/new`)
    : (monitoringsURL = `/notifications/patients/${patientID}/monitorings/`);
  isCreation
    ? (examsURL = `/notifications/patients/${patientID}/exams/new`)
    : (examsURL = `/notifications/patients/${patientID}/exams/`); */

  return (
    <>
      <Heading type="primary">
        {isCreation ? 'Que tipo de notificação você deseja criar?' : 'Notificações do paciente'}
      </Heading>
      <nav className={style.navigation}>
        <Button
          action="default"
          click={isCreation ? () => click(treatmentsURL) : () => click('treatment')}
        >
          <ClipboardPlus className={style.icon} />
          {isCreation ? 'Novo tratamento' : 'Tratamentos'}
        </Button>
        <Button
          action="default"
          click={isCreation ? () => click(monitoringsURL) : () => click('monitoring')}
        >
          <Eye className={style.icon} />
          {isCreation ? 'Novo monitoramento' : 'Monitoramentos'}
        </Button>
        <Button action="default" click={isCreation ? () => click(examsURL) : () => click('exam')}>
          <DropletHalf className={style.icon} />
          {isCreation ? 'Novo exame' : 'Exames'}
        </Button>
      </nav>
    </>
  );
}
