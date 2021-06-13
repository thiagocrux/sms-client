import React from 'react';
import { PersonLinesFill, PenFill, XCircleFill } from 'react-bootstrap-icons';
import { formatDate, formatDateTime } from '../../../../utils/dataFormatter';

import Heading from '../../../../components/Common/Heading/Heading';

import style from './TreatmentsList.module.css';

export default function TreatmentsList({ treatments }) {
  return treatments ? (
    <div class={style.listContainer}>
      <Heading type="primary">Tratamentos do paciente</Heading>
      <ul class={style.list}>
        {treatments.map((treatment) => (
          <li className={style.item}>
            <div className={style.header}>
              <div className={style.itemID}>
                <span>#</span>
                <p>{treatment._id}</p>
              </div>

              <span className={style.controls}>
                <PersonLinesFill className={style.icon} />
                <PenFill className={style.icon} />
                <XCircleFill className={style.icon} />
              </span>
            </div>

            <div className={style.infoContainer}>
              <div className={style.info}>
                <span>Medicação</span>
                <p>{treatment.medication}</p>
              </div>
              <div className={style.info}>
                <span>Localização da UBS</span>
                <p>{treatment.ubsLocation}</p>
              </div>
              <div className={style.info}>
                <span>Data de início</span>
                <p>{formatDate(treatment.startDate)}</p>
              </div>
              <div className={style.info}>
                <span>Dosagem</span>
                <p>{treatment.dosage}</p>
              </div>
              <div className={style.info}>
                <span>Observações</span>
                <p>{treatment.observations}</p>
              </div>
            </div>

            <div className={style.footer}>
              <div className={style.footerInfo}>
                <span>criado em:&nbsp;</span>
                <p>{formatDateTime(treatment.createdAt)}</p>
              </div>
              <div className={style.footerInfo}>
                <span>atualizado em:&nbsp;</span>
                <p>{treatment.updatedAt ? formatDateTime(treatment.updatedAt) : '-'}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Não há resultados</p>
  );
}