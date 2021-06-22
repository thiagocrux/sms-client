import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { patientInitialValues } from '../../../utils/mock';
import api from '../../../utils/api';

import Button from '../../../components/Common/Button/Button';
import Divider from '../../../components/Layout/Form/Divider/Divider';
import Field from '../../../components/Layout/Form/Field/Field';
import Form from '../../../components/Layout/Form/Form';
import Heading from '../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ThematicBreak from '../../../components/Common/ThematicBreak/ThematicBreak';
import ConfirmationModal from '../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import CancelationModal from '../../../components/Layout/Modals/CancelationModal/CancelationModal';

import style from './PatientForm.module.css';

const INITIAL_VALUES = patientInitialValues;

export default function PatientForm() {
  const [formType, setFormType] = useState('create');
  const [patientInformation, setPatientInformation] = useState(INITIAL_VALUES);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const { patientID } = useParams();
  const history = useHistory();

  /* Input handlers */
  const handleChange = (field, value) =>
    setPatientInformation({ ...patientInformation, [field]: value });

  /* Set the type of form on the first render */
  useEffect(() => {
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (patientID && formType !== 'update') {
      setFormType('update');
      api
        .get(`/patients/${patientID}`)
        .then((response) => setPatientInformation(response.data.patient));
      setInputValues(patientInformation);
    } else if (!patientID && formType !== 'create') {
      setFormType('create');
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setPatientInformation(patientInformation);
  }

  function handleFormModal(action) {
    if (action === 'submit') {
      console.log(patientInformation);
      setOpenConfirmationModal(true);
    } else if (action === 'cancel') {
      setOpenCancelationModal(true);
    }
  }

  function handleCancel() {
    setOpenCancelationModal(false);
    history.push('/notifications');
  }

  /* Save the input values in the state and then send to the database */
  function handleSubmit() {
    /* TODO:
      1. Validar os dados antes de salvar no banco de dados;
      2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
    */
    formType === 'create'
      ? api
          .post('/patients/', patientInformation)
          .then((response) => console.log(response))
      : api
          .patch(`/patients/${patientID}`, patientInformation)
          .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.push('/notifications');
  }

  return (
    <>
      <Heading type="primary">
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de paciente
      </Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Dados do paciente</Heading>
          <div
            className={`${style['grid-container']} ${style['first-grid-container']}`}
          >
            <Field>
              <label htmlFor="susCardNumber">Número do cartão do SUS</label>
              <input
                name="susCardNumber"
                onChange={(event) =>
                  handleChange('susCardNumber', event.currentTarget.value)
                }
                value={patientInformation.susCardNumber}
                placeholder="Insira o número do cartão"
              />
            </Field>
            <Field>
              <label htmlFor="name">Nome</label>
              <input
                name="name"
                onChange={(event) =>
                  handleChange('name', event.currentTarget.value)
                }
                value={patientInformation.name}
                placeholder="Insira o nome do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="cpf">CPF</label>
              <input
                name="cpf"
                onChange={(event) =>
                  handleChange('cpf', event.currentTarget.value)
                }
                value={patientInformation.cpf}
                placeholder="Insira o CPF do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="socialName">Nome social</label>
              <input
                name="socialName"
                onChange={(event) =>
                  handleChange('socialName', event.currentTarget.value)
                }
                value={patientInformation.socialName}
                placeholder="Insira o nome do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="birthDate">Data de nascimento</label>
              <input
                type="date"
                name="birthDate"
                onChange={(event) =>
                  handleChange('birthDate', event.currentTarget.value)
                }
                value={patientInformation.birthDate}
              />
            </Field>
            <Field>
              <label htmlFor="phone">Telefone</label>
              <input
                name="phone"
                onChange={(event) =>
                  handleChange('phone', event.currentTarget.value)
                }
                value={patientInformation.phone}
                placeholder="Insira o telefone do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                onChange={(event) =>
                  handleChange('email', event.currentTarget.value)
                }
                value={patientInformation.email}
                type="email"
                placeholder="Insira o e-mail do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="sex">Sexo</label>
              <select
                name="sex"
                onChange={(event) =>
                  handleChange('sex', event.currentTarget.value)
                }
                value={patientInformation.sex}
              >
                <option value="" defaultValue disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Intersexo">Intersexo</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="gender">Gênero</label>
              <select
                name="gender"
                onChange={(event) =>
                  handleChange('gender', event.currentTarget.value)
                }
                value={patientInformation.gender}
              >
                <option value="" defaultValue disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Agênero">Agenero</option>
                <option value="Cisgênero">Cisgênero</option>
                <option value="Transgênero">Transgênero</option>
                <option value="Não-binário">Não-binário</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="sexuality">Sexualidade</label>
              <select
                name="sexuality"
                onChange={(event) =>
                  handleChange('sexuality', event.currentTarget.value)
                }
                value={patientInformation.sexuality}
              >
                <option value="" disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value="Assexual">Assexual</option>
                <option value="Bissexual">Bissexual</option>
                <option value="Heterossexual">Heterossexual</option>
                <option value="Homossexual">Homossexual</option>
                <option value="Outro">Outro</option>
                <option value="Não informado">Não informado</option>
              </select>
            </Field>

            <Field>
              <label htmlFor="nationality">Naturalidade</label>
              <select
                name="nationality"
                onChange={(event) =>
                  handleChange('nationality', event.currentTarget.value)
                }
                value={patientInformation.nationality}
              >
                <option value="" selected disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Brasileiro">Brasileiro</option>
                <option value="Naturalizado">Naturalizado</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="motherName">Nome da mãe do paciente</label>
              <input
                name="motherName"
                onChange={(event) =>
                  handleChange('motherName', event.currentTarget.value)
                }
                value={patientInformation.motherName}
                placeholder="Insira o nome da mãe do paciente"
              />
            </Field>
          </div>
          <ThematicBreak />
          <Heading type="secondary">Endereço do paciente</Heading>
          <div
            className={`${style['grid-container']} ${style['second-grid-container']}`}
          >
            <Field>
              <label htmlFor="zipCode">CEP</label>
              <input
                name="zipCode"
                onChange={(event) =>
                  handleChange('zipCode', event.currentTarget.value)
                }
                value={patientInformation.zipCode}
                placeholder="Insira o CEP da residência"
              />
            </Field>
            <Field>
              <label htmlFor="state">Estado</label>
              <input
                name="state"
                onChange={(event) =>
                  handleChange('state', event.currentTarget.value)
                }
                value={patientInformation.state}
                placeholder="Insira o estado de residência"
              />
            </Field>
            <Field>
              <label htmlFor="city">Cidade</label>
              <input
                name="city"
                onChange={(event) =>
                  handleChange('city', event.currentTarget.value)
                }
                value={patientInformation.city}
                placeholder="Insira a cidade de residência"
              />
            </Field>
            <Field>
              <label htmlFor="neighbourhood">Bairro</label>
              <input
                name="neighbourhood"
                onChange={(event) =>
                  handleChange('neighbourhood', event.currentTarget.value)
                }
                value={patientInformation.neighbourhood}
                placeholder="Insira o bairro de residência"
              />
            </Field>
            <Field>
              <label htmlFor="street">Logradouro (rua, avenida etc)</label>
              <input
                name="street"
                onChange={(event) =>
                  handleChange('street', event.currentTarget.value)
                }
                value={patientInformation.street}
                placeholder="Insira a rua de residência"
              />
            </Field>
            <Field>
              <label htmlFor="houseNumber">Número da residência</label>
              <input
                name="houseNumber"
                onChange={(event) =>
                  handleChange('houseNumber', event.currentTarget.value)
                }
                value={patientInformation.houseNumber}
                placeholder="Insira o número da residência"
              />
            </Field>
            <Field>
              <label htmlFor="complement">Complemento</label>
              <input
                name="complement"
                onChange={(event) =>
                  handleChange('complement', event.currentTarget.value)
                }
                value={patientInformation.complement}
                placeholder="Insira as informações complementares"
              />
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
