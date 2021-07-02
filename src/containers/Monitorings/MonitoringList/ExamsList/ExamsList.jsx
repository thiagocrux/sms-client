import React from 'react';
import { useParams } from 'react-router';
import { formatDate, formatDateTime } from '@utils/dataFormatter';

import Heading from '@components/Common/Heading/Heading';
import MonitoringListItemControls from '../../MonitoringListItemControls/MonitoringListItemControls';
import MonitoringNotFoundMessage from '../../MonitoringNotFoundMessage/MonitoringNotFoundMessage';

import style from './ExamsList.module.css';

export default function ExamsList({ exams }) {
  const { patientID } = useParams();

  return exams.length > 0 ? (
    <div className={style.listContainer}>
      <Heading size="huge" align="center" margin="big">
        Lista de exames
      </Heading>
      <ul className={style.list}>
        {exams
          .map((exam) => (
            <li key={exam._id} className={style.item}>
              <div className={style.header}>
                <div className={style.itemID}>
                  <span>#</span>
                  <p>{exam._id}</p>
                </div>

                <MonitoringListItemControls
                  monitoringType={'exam'}
                  patientID={exam.patient}
                  monitoringID={exam._id}
                />
              </div>

              <div className={style.infoContainer}>
                <h3>Teste treponemico</h3>
                <div className={style.info}>
                  <span>Tipo de teste</span>
                  <p>{exam.trepTestType}</p>
                </div>
                <div className={style.info}>
                  <span>Resultado do teste</span>
                  <p>{exam.trepTestResult}</p>
                </div>
                <div className={style.info}>
                  <span>Data do teste</span>
                  <p>{formatDate(exam.trepTestDate)}</p>
                </div>
                <div className={style.info}>
                  <span>Local do teste</span>
                  <p>{exam.trepTestLocation}</p>
                </div>
                <h3>Teste não-treponemico</h3>
                <div className={style.info}>
                  <span>VDRL</span>
                  <p>{exam.nonTrepTestVDRL}</p>
                </div>
                <div className={style.info}>
                  <span>Titulação</span>
                  <p>{exam.nonTrepTestTitration}</p>
                </div>
                <div className={style.info}>
                  <span>Data do teste</span>
                  <p>{formatDate(exam.nonTrepTestDate)}</p>
                </div>
                <div className={style.info}>
                  <span>Observações de referência e contra-referência</span>
                  <p>
                    {exam.refObservations
                      ? exam.refObservations
                      : 'Não há observações'}
                  </p>
                </div>
              </div>

              <div className={style.footer}>
                <div className={style.footerInfo}>
                  <span>criado em:&nbsp;</span>
                  <p>{formatDateTime(exam.createdAt)}</p>
                </div>
                <div className={style.footerInfo}>
                  <span>atualizado em:&nbsp;</span>
                  <p>{exam.updatedAt ? formatDateTime(exam.updatedAt) : '-'}</p>
                </div>
              </div>
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  ) : (
    <MonitoringNotFoundMessage
      link={`/monitorings/patients/${patientID}/exams/new`}
      subject="exame"
    />
  );
}
