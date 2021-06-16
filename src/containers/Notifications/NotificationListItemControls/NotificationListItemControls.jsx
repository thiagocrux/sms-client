import React from 'react';
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import api from '../../../utils/api';

import style from './NotificationListItemControls.module.css';

export default function NotificationListItemControls({
  patientID,
  notificationType,
  notificationID,
}) {
  const history = useHistory();
  const url = `/notifications/patients/${patientID}/${notificationType}s/${notificationID}/edit`;

  function handleDelete() {
    // api
    //   .delete(
    //     `/notifications/patients/${patientID}/${notificationType}s/${notificationID}/edit`
    //   )
    //   .then((response) => console.log(response));
    console.log('Delete notification: ' + notificationID);
  }

  return (
    <div className={style.notificationControls}>
      <button
        className={`${style.button} ${style.edit}`}
        onClick={() => history.push(url)}
      >
        <PenFill className={style.icon} />
        Editar
      </button>
      <button
        className={`${style.button} ${style.delete}`}
        onClick={handleDelete}
      >
        <TrashFill className={style.icon} />
        Excluir
      </button>
    </div>
  );
}
