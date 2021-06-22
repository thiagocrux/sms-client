import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  genderOptions,
  nationalityOptions,
  patientInitialValues as INITIAL_VALUES,
  sexOptions,
  sexualityOptions,
} from '../../../utils/formData';
import api from '../../../utils/api';

import Button from '../../../components/Common/Button/Button';
import CancelationModal from '../../../components/Layout/Modals/CancelationModal/CancelationModal';
import ConfirmationModal from '../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import Divider from '../../../components/Layout/Form/Divider/Divider';
import Form from '../../../components/Layout/Form/Form';
import Heading from '../../../components/Common/Heading/Heading';
import Input from '../../../components/Layout/Form/Input/Input';
import Select from '../../../components/Layout/Form/Select/Select';
import SubmitContainer from '../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ThematicBreak from '../../../components/Common/ThematicBreak/ThematicBreak';

import style from './PatientForm.module.css';

export default function PatientForm() {
  const [isCreationForm, setIsCreationForm] = useState('create');
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
    if (patientID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/patients/${patientID}`)
        .then((response) => setPatientInformation(response.data.patient));
      setInputValues(patientInformation);
    } else if (!patientID && !isCreationForm) {
      setIsCreationForm(true);
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
    isCreationForm === 'create'
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
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de paciente
      </Heading>
      <Form>
        <Divider>
          <Heading size="medium" align="start" margin="small">
            Dados do paciente
          </Heading>
          <div className={`${style.gridContainer} ${style.upperGridContainer}`}>
            <Input
              label="Número do cartão do SUS"
              type="text"
              name="susCardNumber"
              placeholder="Insira o número do cartão"
              value={patientInformation.susCardNumber}
              change={(event) =>
                handleChange('susCardNumber', event.currentTarget.value)
              }
            />
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Insira o nome do paciente"
              value={patientInformation.name}
              change={(event) =>
                handleChange('name', event.currentTarget.value)
              }
            />
            <Input
              label="CPF"
              type="text"
              name="cpf"
              placeholder="Insira o CPF do paciente"
              value={patientInformation.cpf}
              change={(event) => handleChange('cpf', event.currentTarget.value)}
            />
            <Input
              label="Nome social"
              type="text"
              name="socialName"
              placeholder="Insira o CPF do paciente"
              value={patientInformation.socialName}
              change={(event) =>
                handleChange('socialName', event.currentTarget.value)
              }
            />
            <Input
              label="Data de nascimento"
              type="date"
              name="birthDate"
              value={patientInformation.birthDate}
              change={(event) =>
                handleChange('birthDate', event.currentTarget.value)
              }
            />
            <Input
              label="Telefone"
              type="text"
              name="phone"
              placeholder="Insira o telefone do paciente"
              value={patientInformation.phone}
              change={(event) =>
                handleChange('phone', event.currentTarget.value)
              }
            />
            <Input
              label="E-mail"
              type="email"
              name="email"
              placeholder="Insira o e-mail do paciente"
              value={patientInformation.email}
              change={(event) =>
                handleChange('email', event.currentTarget.value)
              }
            />
            <Select
              label="Sexo"
              name="sex"
              options={sexOptions}
              value={patientInformation.sex}
              change={(event) => handleChange('sex', event.currentTarget.value)}
            />
            <Select
              label="Gênero"
              name="gender"
              options={genderOptions}
              value={patientInformation.gender}
              change={(event) =>
                handleChange('gender', event.currentTarget.value)
              }
            />
            <Select
              label="Sexualidade"
              name="sexuality"
              options={sexualityOptions}
              value={patientInformation.sexuality}
              change={(event) =>
                handleChange('sexuality', event.currentTarget.value)
              }
            />
            <Select
              label="Naturalidade"
              name="nationality"
              options={nationalityOptions}
              value={patientInformation.nationality}
              change={(event) =>
                handleChange('nationality', event.currentTarget.value)
              }
            />
            <Input
              label="Nome da mãe do paciente"
              type="text"
              name="motherName"
              placeholder="Insira o nome da mãe do paciente"
              value={patientInformation.motherName}
              change={(event) =>
                handleChange('motherName', event.currentTarget.value)
              }
            />
          </div>
          <ThematicBreak />
          <Heading size="medium" align="start" margin="small">
            Endereço do paciente
          </Heading>
          <div className={`${style.gridContainer} ${style.lowerGridContainer}`}>
            <Input
              label="CEP"
              type="text"
              name="zipCode"
              placeholder="Insira o CEP do paciente"
              value={patientInformation.zipCode}
              change={(event) =>
                handleChange('zipCode', event.currentTarget.value)
              }
            />
            <Input
              label="Estado"
              type="text"
              name="state"
              placeholder="Insira o estado de residência"
              value={patientInformation.state}
              change={(event) =>
                handleChange('state', event.currentTarget.value)
              }
            />
            <Input
              label="Cidade"
              type="text"
              name="city"
              placeholder="Insira a cidade de residência"
              value={patientInformation.city}
              change={(event) =>
                handleChange('city', event.currentTarget.value)
              }
            />
            <Input
              label="Bairro"
              type="text"
              name="neighbourhood"
              placeholder="Insira o bairro de residência"
              value={patientInformation.neighbourhood}
              change={(event) =>
                handleChange('neighbourhood', event.currentTarget.value)
              }
            />
            <Input
              label="Logradouro (rua, avenida etc)"
              type="text"
              name="street"
              placeholder="Insira a rua de residência"
              value={patientInformation.street}
              change={(event) =>
                handleChange('street', event.currentTarget.value)
              }
            />
            <Input
              label="Número da residência"
              type="text"
              name="houseNumber"
              placeholder="Insira o número da residência"
              value={patientInformation.houseNumber}
              change={(event) =>
                handleChange('houseNumber', event.currentTarget.value)
              }
            />
            <Input
              label="Complemento"
              type="text"
              name="complement"
              placeholder="Insira as informações complementares"
              value={patientInformation.complement}
              change={(event) =>
                handleChange('complement', event.currentTarget.value)
              }
            />
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
            {isCreationForm ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
      <ConfirmationModal
        open={openConfirmationModal}
        message={
          isCreationForm
            ? 'Confirmar o cadastro do paciente?'
            : 'Confirmar alteração dos dados do paciente?'
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
