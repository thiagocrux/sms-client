import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';
import { useParams, useHistory } from 'react-router-dom';
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import { formatDateTime, formatCPF } from '../../../utils/dataFormatter';

import Heading from '../../../components/Common/Heading/Heading';
import Divider from '../../../components/Layout/Form/Divider/Divider';

import style from './UserFullInfo.module.css';
import ThematicBreak from '../../../components/Common/ThematicBreak/ThematicBreak';

export default function UserFullInfo() {
  const [user, setUser] = useState({});
  const { userID } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${userID}`).then((response) => setUser(response.data.user));
  }, [userID]);

  return (
    <div className={style.infoContainer}>
      <Heading type="primary">Informações do usuário</Heading>
      <Divider>
        <Heading type="secondary">Informações pessoais</Heading>
        <div className={style.personalInfoContainer}>
          <div className={style.info}>
            <span>Nome</span>
            <p>{user.name}</p>
          </div>
          <div className={style.info}>
            <span>CPF</span>
            <p>{user.cpf && formatCPF(user.cpf)}</p>
          </div>
          <div className={style.info}>
            <span>Cargo</span>
            <p>{user.role}</p>
          </div>
          <div className={style.info}>
            <span>Local de trabalho</span>
            <p>{user.workLocation}</p>
          </div>
          <div className={style.info}>
            <span>E-mail</span>
            <p>{user.email}</p>
          </div>
          <div className={style.info}>
            <span>Permissão de administrador?</span>
            <p>{user.admin ? 'Sim' : 'Não'}</p>
          </div>
        </div>
        <ThematicBreak />
        <div className={style.registerInfoContainer}>
          <div className={style.info}>
            <span>Data de criação</span>
            <p>{formatDateTime(user.createdAt)}</p>
          </div>
          <div className={style.info}>
            <span>Data de atualização</span>
            <p>{user.updatedAt ? formatDateTime(user.updatedAt) : '-'}</p>
          </div>
        </div>
        <div className={style.userControls}>
          <button
            className={`${style.button} ${style.edit}`}
            onClick={() => history.push(`/users/${userID}/edit`)}
          >
            <PenFill className={style.icon} />
            Editar usuário
          </button>
          <button
            className={`${style.button} ${style.delete}`}
            onClick={() => console.log('Delete button clicked!')}
          >
            <TrashFill className={style.icon} />
            Excluir usuário
          </button>
        </div>
      </Divider>
    </div>
  );
}
