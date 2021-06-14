import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { userInitialValues } from '../../../utils/mock';

import Button from '../../../components/Common/Button/Button';
import Divider from '../../../components/Layout/Form/Divider/Divider';
import Field from '../../../components/Layout/Form/Field/Field';
import Form from '../../../components/Layout/Form/Form';
import Heading from '../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './UserForm.module.css';

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const INITIAL_VALUES = userInitialValues;

export default function UserForm() {
  const [formType, setFormType] = useState('create');
  const [userInformation, setUserInformation] = useState(INITIAL_VALUES);
  const { userID } = useParams();

  /* Input handlers */
  const handleChange = (field, value) =>
    setUserInformation({ ...userInformation, [field]: value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [USER] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (userID && formType !== 'update') {
      setFormType('update');
      axios
        .get(`http://localhost:8000/api/v1/users/${userID}`)
        .then((response) => console.log(response.data.user));
      setInputValues();
      console.log(formType);
    } else if (!userID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Buscar informações no banco de dados e substituir o objeto abaixo.
    setUserInformation(userInformation);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */
      console.log(userInformation);
      axios.post('http://localhost:8000/api/v1/users/', userInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Criar lógica para o botão de cancelar.
      */
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type="primary">
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de paciente
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
                  value={userInformation.partnerTreatment}
                />
              </div>
            </Field>
          </div>
        </Divider>
        <SubmitContainer>
          <Button
            type="button"
            action="cancel"
            click={() => handleButtonClick('cancel')}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            action="submit"
            click={() => handleButtonClick('submit')}
          >
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
    </>
  );
}
