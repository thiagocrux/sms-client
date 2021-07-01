import React from 'react';
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

import style from './MonitoringListItemControls.module.css';

export default function MonitoringListItemControls({
  patientID,
  monitoringType,
  monitoringID,
}) {
  const history = useHistory();
  const url = `/monitorings/patients/${patientID}/${monitoringType}s/${monitoringID}/edit`;

  function handleDelete() {
    // api
    //   .delete(
    //     `/monitorings/patients/${patientID}/${monitoringType}s/${monitoringID}/edit`
    //   )
    //   .then((response) => console.log(response));
    console.log('Delete monitoring: ' + monitoringID);
  }

  return (
    <div className={style.monitoringControls}>
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
