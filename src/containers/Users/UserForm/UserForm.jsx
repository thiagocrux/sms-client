import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userInitialValues } from '../../../utils/mock';
import api from '../../../utils/api';

import Button from '../../../components/Common/Button/Button';
import Divider from '../../../components/Layout/Form/Divider/Divider';
import Field from '../../../components/Layout/Form/Field/Field';
import Form from '../../../components/Layout/Form/Form';
import Heading from '../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ConfirmationModal from '../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import CancelationModal from '../../../components/Layout/Modals/CancelationModal/CancelationModal';

import style from './UserForm.module.css';

const INITIAL_VALUES = userInitialValues;

export default function UserForm() {
  const [formType, setFormType] = useState('create');
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
    if (userID && formType !== 'update') {
      setFormType('update');
      api
        .get(`/users/${userID}`)
        .then((response) => setUserInformation(response.data.user));
      setInputValues();
    } else if (!userID && formType !== 'create') {
      setFormType('create');
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
    formType === 'create'
      ? api
          .post('/users/', userInformation)
          .then((response) => console.log(response))
      : api.patch(`/users/${userID}`).then((response) => console.log(response));

    setOpenConfirmationModal(false);
    history.goBack();
  }

  return (
    <>
      <Heading type="primary">
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de usuário
      </Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Informações do usuário</Heading>
          <div className={style.gridContainer}>
            <Field>
              <label htmlFor="name">Nome</label>
              <input
                name="name"
                onChange={(event) =>
                  handleChange('name', event.currentTarget.value)
                }
                value={userInformation.name}
                placeholder="Insira o nome do usuário"
              />
            </Field>
            <Field>
              <label htmlFor="cpf">CPF</label>
              <input
                name="cpf"
                onChange={(event) =>
                  handleChange('cpf', event.currentTarget.value)
                }
                value={userInformation.cpf}
                placeholder="Insira o CPF do usuário"
              />
            </Field>
            <Field>
              <label htmlFor="role">Cargo</label>
              <input
                name="role"
                onChange={(event) =>
                  handleChange('role', event.currentTarget.value)
                }
                value={userInformation.role}
                placeholder="Insira o cargo do usuário"
              />
            </Field>
            <Field>
              <label htmlFor="workLocation">Local de trabalho</label>
              <input
                name="workLocation"
                onChange={(event) =>
                  handleChange('workLocation', event.currentTarget.value)
                }
                value={userInformation.workLocation}
                placeholder="Insira o local de trabalho do usuário"
              />
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                onChange={(event) =>
                  handleChange('email', event.currentTarget.value)
                }
                value={userInformation.email}
                placeholder="Insira o e-mail do usuário"
              />
            </Field>
            <Field>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                onChange={(event) =>
                  handleChange('password', event.currentTarget.value)
                }
                value={userInformation.password}
                placeholder="Insira a senha do usuário"
              />
            </Field>
            <Field>
              <div className={style.flexContainer}>
                <label htmlFor="admin">Permissão de administrador</label>
                <input
                  type="checkbox"
                  name="admin"
                  onChange={(event) =>
                    handleChange('admin', event.currentTarget.checked)
                  }
                  checked={userInformation.admin}
                />
              </div>
            </Field>
          </div>
        </Divider>
        <SubmitContainer>
          <Button
            type="button"
            action="cancel"
            click={() => handleFormModal('cancel')}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            action="submit"
            click={() => handleFormModal('submit')}
          >
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
      <ConfirmationModal
        open={openConfirmationModal}
        message="Cadastrar novo paciente?"
        cancel={() => setOpenConfirmationModal(false)}
        confirm={handleSubmit}
      />
      <CancelationModal
        open={openCancelationModal}
        message="Deseja cancelar?"
        cancel={() => setOpenCancelationModal(false)}
        confirm={handleCancel}
      />
    </>
  );
}
