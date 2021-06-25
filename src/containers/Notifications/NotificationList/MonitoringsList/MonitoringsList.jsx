import React from 'react';
import { useParams } from 'react-router-dom';
import { formatDate, formatDateTime } from '../../../../utils/dataFormatter';

import Heading from '@components/Common/Heading/Heading';
import NotificationListItemControls from '../../NotificationListItemControls/NotificationListItemControls';
import NotificationNotFoundMessage from '../../NotificationNotFoundMessage/NotificationNotFoundMessage';

import style from './MonitoringsList.module.css';

export default function MonitoringsList({ monitorings }) {
  const { patientID } = useParams();

  return monitorings.length > 0 ? (
    <div className={style.listContainer}>
      <Heading size="huge" align="center" margin="big">
        Lista de monitoramentos
      </Heading>
      <ul className={style.list}>
        {monitorings.map((monitoring) => (
          <li key={monitoring._id} className={style.item}>
            <div className={style.header}>
              <div className={style.itemID}>
                <span>#</span>
                <p>{monitoring._id}</p>
              </div>

              <NotificationListItemControls
                notificationType={'monitoring'}
                patientID={monitoring.patient}
                notificationID={monitoring._id}
              />
            </div>

            <div className={style.infoContainer}>
              <div className={style.info}>
                <span>Titulação do 1º VDRL</span>
                <p>{monitoring.vdrl1Titration}</p>
              </div>
              <div className={style.info}>
                <span>Data do 1º VDRL</span>
                <p>{formatDate(monitoring.vdrl1Date)}</p>
              </div>
              <div className={style.info}>
                <span>Titulação do 2º VDRL</span>
                <p>{monitoring.vdrl2Titration}</p>
              </div>
              <div className={style.info}>
                <span>Data do 2º VDRL</span>
                <p>{formatDate(monitoring.vdrl2Date)}</p>
              </div>
              <div className={style.info}>
                <span>Titulação do 3º VDRL</span>
                <p>{monitoring.vdrl3Titration}</p>
              </div>
              <div className={style.info}>
                <span>Data do 3º VDRL</span>
                <p>{formatDate(monitoring.vdrl3Date)}</p>
              </div>
              <div className={style.info}>
                <span>Tratamento de parceiro?</span>
                <p>{monitoring.partnerTreatment ? 'Sim' : 'Não'}</p>
              </div>
              <div className={style.info}>
                <span>Observações</span>
                <p>{monitoring.observations}</p>
              </div>
            </div>

            <div className={style.footer}>
              <div className={style.footerInfo}>
                <span>criado em:&nbsp;</span>
                <p>{formatDateTime(monitoring.createdAt)}</p>
              </div>
              <div className={style.footerInfo}>
                <span>atualizado em:&nbsp;</span>
                <p>
                  {monitoring.updatedAt
                    ? formatDateTime(monitoring.updatedAt)
                    : '-'}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <NotificationNotFoundMessage
      link={`/notifications/patients/${patientID}/monitorings/new`}
      subject="monitoramento"
    />
  );
}
