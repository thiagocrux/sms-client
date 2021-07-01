import React from 'react';
import { useParams } from 'react-router-dom';
import { ClipboardPlus, DropletHalf, Eye, Star } from 'react-bootstrap-icons';

import Heading from '@components/Common/Heading/Heading';
import Button from '@components/Common/Buttons/Button/Button';

import style from './MonitoringOptions.module.css';

export default function MonitoringOptions({ isCreation, click }) {
  const { patientID } = useParams();
  const examsURL = `/monitorings/patients/${patientID}/exams/new`;
  const notificationsURL = `/monitorings/patients/${patientID}/notifications/new`;
  const observationsURL = `/monitorings/patients/${patientID}/observations/new`;
  const treatmentsURL = `/monitorings/patients/${patientID}/treatments/new`;

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
            isCreation
              ? () => click(notificationsURL)
              : () => click('notification')
          }
        >
          <Star className={style.icon} />
          {isCreation ? 'Nova notificação' : 'Notificações'}
        </Button>

        <Button
          class="success"
          size="big"
          click={isCreation ? () => click(examsURL) : () => click('exam')}
        >
          <DropletHalf className={style.icon} />
          {isCreation ? 'Novo exame' : 'Exames'}
        </Button>

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
            isCreation
              ? () => click(observationsURL)
              : () => click('observation')
          }
        >
          <Eye className={style.icon} />
          {isCreation ? 'Nova observação' : 'Observações'}
        </Button>
      </nav>
    </>
  );
}
