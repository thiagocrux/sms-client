import React from 'react';
import { useParams } from 'react-router';
import { formatDateTime } from '../../../../utils/dataFormatter';

import Heading from '../../../../components/Common/Heading/Heading';
import MonitoringListItemControls from '../../MonitoringListItemControls/MonitoringListItemControls';
import MonitoringNotFoundMessage from '../../MonitoringNotFoundMessage/MonitoringNotFoundMessage';

import style from './NotificationsList.module.css';

export default function NotificationsList({ notifications }) {
  const { patientID } = useParams();

  return notifications.length > 0 ? (
    <div className={style.listContainer}>
      <Heading size="huge" align="center" margin="big">
        Lista de notificações
      </Heading>
      <ul className={style.list}>
        {notifications
          .map((notification) => (
            <li key={notification._id} className={style.item}>
              <div className={style.header}>
                <div className={style.itemID}>
                  <span>#</span>
                  <p>{notification._id}</p>
                </div>

                <MonitoringListItemControls
                  monitoringType={'notification'}
                  patientID={notification.patient}
                  monitoringID={notification._id}
                />
              </div>

              <div className={style.infoContainer}>
                <div className={style.info}>
                  <span>SINAN</span>
                  <p>{notification.sinan}</p>
                </div>
                <div className={style.info}>
                  <span>Observações sobre a notificação</span>
                  <p>{notification.observations}</p>
                </div>
              </div>

              <div className={style.footer}>
                <div className={style.footerInfo}>
                  <span>criado em:&nbsp;</span>
                  <p>{formatDateTime(notification.createdAt)}</p>
                </div>
                <div className={style.footerInfo}>
                  <span>atualizado em:&nbsp;</span>
                  <p>
                    {notification.updatedAt
                      ? formatDateTime(notification.updatedAt)
                      : '-'}
                  </p>
                </div>
              </div>
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  ) : (
    <MonitoringNotFoundMessage
      link={`/monitorings/patients/${patientID}/notifications/new`}
      subject="notificação"
    />
  );
}
