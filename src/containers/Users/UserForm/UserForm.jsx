import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import {
  ubsOptions,
  userInitialValues as INITIAL_VALUES,
} from '@utils/formData';
import api from '@utils/api';

import Button from '@components/Common/Buttons/Button/Button';
import CancelationModal from '@components/Layout/Modals/CancelationModal/CancelationModal';
import Checkbox from '@components/Layout/Form/Checkbox/Checkbox';
import ConfirmationModal from '@components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import Divider from '@components/Layout/Form/Divider/Divider';
import Form from '@components/Layout/Form/Form';
import Heading from '@components/Common/Heading/Heading';
import Input from '@components/Layout/Form/Input/Input';
import Select from '@components/Layout/Form/Select/Select';
import SubmitContainer from '@components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './UserForm.module.css';

export default function UserForm() {
  const [isCreationForm, setIsCreationForm] = useState('create');
  const [userInformation, setUserInformation] = useState(INITIAL_VALUES);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const { userID } = useParams();
  const history = useHistory();

  /* Input handlers */
  const handleChange = (field, value) =>
    setUserInformation({ ...userInformation, [field]: value });

  /* Set the type of form on the first render */
  useEffect(() => {
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (userID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/users/${userID}`)
        .then((response) => setUserInformation(response.data.user));
      setInputValues();
    } else if (!userID && !isCreationForm) {
      setIsCreationForm(true);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setUserInformation(userInformation);
  }

  /* Save the input values in the state and then send to the database */
  function handleFormModal(action) {
    if (action === 'submit') {
      console.log(userInformation);
      setOpenConfirmationModal(true);
    } else if (action === 'cancel') {
      setOpenCancelationModal(true);
    }
  }

  function handleCancel() {
    setOpenCancelationModal(false);
    history.push('/users');
  }

  /* Save the input values in the state and then send to the database */
  function handleSubmit() {
    isCreationForm
      ? api
          .post('/users/', userInformation)
          .then((response) => console.log(response))
      : api
          .patch(`/users/${userID}`, userInformation)
          .then((response) => console.log(response));

    setOpenConfirmationModal(false);
    history.goBack(); // FIXME: Update the route to history.push(...)
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de usuário
      </Heading>
      <Form>
        <Divider>
          <Heading size="medium" align="start" margin="small">
            Informações do usuário
          </Heading>
          <div className={style.gridContainer}>
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Insira o nome do usuário"
              value={userInformation.name}
              change={(event) =>
                handleChange('name', event.currentTarget.value)
              }
            />
            <Input
              label="CPF"
              type="text"
              name="cpf"
              placeholder="Insira o CPF do usuário"
              value={userInformation.cpf}
              change={(event) => handleChange('cpf', event.currentTarget.value)}
            />
            <Input
              label="Cargo"
              type="text"
              name="role"
              placeholder="Insira o cargo do usuário"
              value={userInformation.role}
              change={(event) =>
                handleChange('role', event.currentTarget.value)
              }
            />
            <Select
              label="Local de trabalho"
              name="workLocation"
              options={ubsOptions}
              value={userInformation.workLocation}
              change={(event) =>
                handleChange('workLocation', event.currentTarget.value)
              }
            />
            <Input
              label="E-mail"
              type="email"
              name="email"
              placeholder="Insira o e-mail do usuário"
              value={userInformation.email}
              change={(event) =>
                handleChange('email', event.currentTarget.value)
              }
            />
            <Input
              label="Senha"
              type="password"
              name="password"
              placeholder="Insira a senha do usuário"
              value={userInformation.password}
              change={(event) =>
                handleChange('password', event.currentTarget.value)
              }
            />
            <Checkbox
              label="Permissão de administrador"
              name="admin"
              checked={userInformation.admin}
              change={(event) =>
                handleChange('admin', event.currentTarget.checked)
              }
            />
          </div>
        </Divider>
        <SubmitContainer>
          <Button
            class="danger"
            size="big"
            click={() => handleFormModal('cancel')}
          >
            <XCircle />
            Cancelar
          </Button>
          <Button
            class="success"
            size="big"
            click={() => handleFormModal('submit')}
          >
            <CheckCircle />
            {isCreationForm ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
      <ConfirmationModal
        open={openConfirmationModal}
        message={
          isCreationForm
            ? 'Confirmar o cadastro do usuário?'
            : 'Confirmar alteração dos dados do usuário?'
        }
        cancel={() => setOpenConfirmationModal(false)}
        confirm={handleSubmit}
      />
      <CancelationModal
        open={openCancelationModal}
        message={`Deseja realmente cancelar esta operação? Todos os dados modificados serão perdidos.`}
        cancel={() => setOpenCancelationModal(false)}
        confirm={handleCancel}
      />
    </>
  );
}
