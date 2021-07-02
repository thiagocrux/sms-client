import React from 'react';
import { useParams } from 'react-router-dom';
import { formatDateTime } from '../../../../utils/dataFormatter';

import Heading from '../../../../components/Common/Heading/Heading';
import MonitoringListItemControls from '../../MonitoringListItemControls/MonitoringListItemControls';
import MonitoringNotFoundMessage from '../../MonitoringNotFoundMessage/MonitoringNotFoundMessage';

import style from './ObservationsList.module.css';

export default function MonitoringsList({ observations }) {
  const { patientID } = useParams();

  return observations.length > 0 ? (
    <div className={style.listContainer}>
      <Heading size="huge" align="center" margin="big">
        Lista de observações
      </Heading>
      <ul className={style.list}>
        {observations
          .map((observation) => (
            <li key={observation._id} className={style.item}>
              <div className={style.header}>
                <div className={style.itemID}>
                  <span>#</span>
                  <p>{observation._id}</p>
                </div>

                <MonitoringListItemControls
                  monitoringType={'observation'}
                  patientID={observation.patient}
                  monitoringID={observation._id}
                />
              </div>

              <div className={style.infoContainer}>
                <div className={style.info}>
                  <span>Tratamento de parceiro?</span>
                  <p>{observation.partnerTreatment ? 'Sim' : 'Não'}</p>
                </div>
                <div className={style.info}>
                  <span>Observações</span>
                  <p>{observation.observations}</p>
                </div>
              </div>

              <div className={style.footer}>
                <div className={style.footerInfo}>
                  <span>criado em:&nbsp;</span>
                  <p>{formatDateTime(observation.createdAt)}</p>
                </div>
                <div className={style.footerInfo}>
                  <span>atualizado em:&nbsp;</span>
                  <p>
                    {observation.updatedAt
                      ? formatDateTime(observation.updatedAt)
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
      link={`/monitorings/patients/${patientID}/observations/new`}
      subject="observação"
    />
  );
}
