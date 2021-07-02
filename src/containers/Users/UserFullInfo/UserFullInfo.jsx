import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PenFill, TrashFill } from 'react-bootstrap-icons';
import api from '../../../utils/api';
import { formatDateTime } from '../../../utils/dataFormatter';

import ButtonReturn from '../../../components/Common/Buttons/ButtonReturn/ButtonReturn';
import Button from '../../../components/Common/Buttons/Button/Button';
import Heading from '../../../components/Common/Heading/Heading';
import Card from '../../../components/Common/Card/Card';
import Info from '../../../components/Common/Info/Info';
import ThematicBreak from '../../../components/Common/ThematicBreak/ThematicBreak';

import style from './UserFullInfo.module.css';

export default function UserFullInfo() {
  const [user, setUser] = useState({});
  const { userID } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${userID}`).then((response) => setUser(response.data.user));
  }, [userID]);

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        Informações do usuário
      </Heading>
      <Card>
        <ButtonReturn link={`/users/`} />
        <Heading size="medium" align="start" margin="small">
          Informações pessoais
        </Heading>
        <div className={style.personalInfoContainer}>
          <Info class="regular" label="Nome" info={user.name} />
          <Info class="regular" label="CPF" info={user.cpf} />
          <Info class="regular" label="Cargo" info={user.role} />
          <Info
            class="regular"
            label="Local de trabalho"
            info={user.workLocation}
          />
          <Info class="regular" label="E-mail" info={user.email} />
          <Info
            class="regular"
            label="Permissão de administrador?"
            info={user.admin ? 'Sim' : 'Não'}
          />
        </div>
        <ThematicBreak />
        <Heading size="medium" align="start" margin="small">
          Informações de cadastro
        </Heading>
        <div className={style.registerInfoContainer}>
          <Info
            class="regular"
            label="Data de criação"
            info={formatDateTime(user.createdAt)}
          />
          <Info
            class="regular"
            label="Data de atualização"
            info={user.updatedAt ? formatDateTime(user.updatedAt) : '-'}
          />
        </div>
        <div className={style.userControls}>
          <Button
            class="success"
            size="medium"
            click={() => history.push(`/users/${userID}/edit`)}
          >
            <PenFill />
            Editar usuário
          </Button>
          <Button
            class="danger"
            size="medium"
            click={() => console.log('Delete button clicked!')}
          >
            <TrashFill />
            Excluir usuário
          </Button>
        </div>
      </Card>
    </>
  );
}
