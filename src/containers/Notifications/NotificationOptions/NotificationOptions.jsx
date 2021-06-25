import React from 'react';
import { useParams } from 'react-router-dom';
import { ClipboardPlus, DropletHalf, Eye } from 'react-bootstrap-icons';

import Heading from '@components/Common/Heading/Heading';
import Button from '@components/Common/Buttons/Button/Button';

import style from './NotificationOptions.module.css';

export default function NotificationOptions({ isCreation, click }) {
  const { patientID } = useParams();
  const treatmentsURL = `/notifications/patients/${patientID}/treatments/new`;
  const examsURL = `/notifications/patients/${patientID}/exams/new`;
  const monitoringsURL = `/notifications/patients/${patientID}/monitorings/new`;

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreation
          ? 'Que tipo de notificação você deseja criar?'
          : 'Notificações do paciente'}
      </Heading>
      <nav className={style.navigation}>
        <Button
          class="success"
          size="big"
          click={
            isCreation ? () => click(treatmentsURL) : () => click('treatment')
          }
        >
          <ClipboardPlus className={style.icon} />
          {isCreation ? 'Novo tratamento' : 'Tratamentos'}
        </Button>
        <Button
          class="success"
          size="big"
          click={
            isCreation ? () => click(monitoringsURL) : () => click('monitoring')
          }
        >
          <Eye className={style.icon} />
          {isCreation ? 'Novo monitoramento' : 'Monitoramentos'}
        </Button>
        <Button
          class="success"
          size="big"
          click={isCreation ? () => click(examsURL) : () => click('exam')}
        >
          <DropletHalf className={style.icon} />
          {isCreation ? 'Novo exame' : 'Exames'}
        </Button>
      </nav>
    </>
  );
}
