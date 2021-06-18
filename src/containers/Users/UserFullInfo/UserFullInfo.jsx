import React from 'react';

import Heading from '../../../components/Common/Heading/Heading';
import Divider from '../../../components/Layout/Form/Divider/Divider';

import style from './UserFullInfo.module.css';

export default function UserFullInfo({ user }) {
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
            <p>{user.cpf}</p>
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
            <span>Senha</span>
            <p>{user.password}</p>
          </div>
          <div className={style.info}>
            <span>Permissão de administrador?</span>
            <p>{user.admin}</p>
          </div>
          <div className={style.footer}>
            <div className={style.footerInfo}>
              <span>Data de criação</span>
              <p>{user.createdAt}</p>
            </div>
            <div className={style.footerInfo}>
              <span>Data de atualização</span>
              <p>{user.updatedAt}</p>
            </div>
          </div>
        </div>
      </Divider>
    </div>
  );
}
