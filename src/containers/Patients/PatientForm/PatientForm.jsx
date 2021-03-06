import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import api from '@utils/api';
import {
  genderOptions,
  nationalityOptions,
  monitoringTypeOptions,
  patientInitialValues as INITIAL_VALUES,
  sexOptions,
  sexualityOptions,
} from '@utils/formData';

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
import ThematicBreak from '@components/Common/ThematicBreak/ThematicBreak';

import style from './PatientForm.module.css';
import {
  raceOptions,
  schoolingOptions,
  stateOptions,
} from '../../../utils/formData';

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
    history.push('/monitorings');
  }

  /* Save the input values in the state and then send to the database */
  function handleSubmit() {
    /* TODO:
      1. Validar os dados antes de salvar no banco de dados;
      2. Salvar valores no banco de dados de acordo com o m??todo (cria????o ou atualiza????o);
    */
    isCreationForm === 'create'
      ? api
          .post('/patients/', patientInformation)
          .then((response) => console.log(response))
      : api
          .patch(`/patients/${patientID}`, patientInformation)
          .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.goBack();
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualiza????o'} de paciente
      </Heading>
      <Form>
        <Divider>
          <Heading size="medium" align="start" margin="small">
            Dados do paciente
          </Heading>
          <div className={`${style.gridContainer} ${style.upperGridContainer}`}>
            <Input
              label="N??mero do cart??o do SUS"
              type="text"
              name="susCardNumber"
              placeholder="Insira o n??mero do cart??o"
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
              placeholder="Insira o nome social do paciente"
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
              label="Ra??a/cor"
              name="race"
              options={raceOptions}
              value={patientInformation.race}
              change={(event) =>
                handleChange('race', event.currentTarget.value)
              }
            />
            <Select
              label="Escolaridade"
              name="schooling"
              options={schoolingOptions}
              value={patientInformation.schooling}
              change={(event) =>
                handleChange('schooling', event.currentTarget.value)
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
              label="G??nero"
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
              label="Nome da m??e do paciente"
              type="text"
              name="motherName"
              placeholder="Insira o nome da m??e do paciente"
              value={patientInformation.motherName}
              change={(event) =>
                handleChange('motherName', event.currentTarget.value)
              }
            />
            <Select
              label="Tipo de notifica????o"
              name="monitoringType"
              options={monitoringTypeOptions}
              value={patientInformation.monitoringType}
              change={(event) =>
                handleChange('monitoringType', event.currentTarget.value)
              }
            />
            <Input
              label="Nome do pai do paciente"
              type="text"
              name="fatherName"
              placeholder="Insira o nome do pai do paciente"
              value={patientInformation.fatherName}
              change={(event) =>
                handleChange('fatherName', event.currentTarget.value)
              }
            />
            <Checkbox
              label="Paciente falecido"
              type="checkbox"
              name="isDeceased"
              checked={patientInformation.isDeceased}
              change={(event) =>
                handleChange('isDeceased', event.currentTarget.checked)
              }
            />
          </div>
          <ThematicBreak />
          <Heading size="medium" align="start" margin="small">
            Endere??o do paciente
          </Heading>
          <div className={`${style.gridContainer} ${style.lowerGridContainer}`}>
            <Input
              label="CEP"
              type="text"
              name="zipCode"
              placeholder="Insira o CEP da resid??ncia"
              value={patientInformation.zipCode}
              change={(event) =>
                handleChange('zipCode', event.currentTarget.value)
              }
            />
            <Select
              label="Estado"
              name="state"
              options={stateOptions}
              value={patientInformation.state}
              change={(event) =>
                handleChange('state', event.currentTarget.value)
              }
            />
            <Input
              label="Cidade"
              type="text"
              name="city"
              placeholder="Insira a cidade de resid??ncia"
              value={patientInformation.city}
              change={(event) =>
                handleChange('city', event.currentTarget.value)
              }
            />
            <Input
              label="Bairro"
              type="text"
              name="neighbourhood"
              placeholder="Insira o bairro de resid??ncia"
              value={patientInformation.neighbourhood}
              change={(event) =>
                handleChange('neighbourhood', event.currentTarget.value)
              }
            />
            <Input
              label="Logradouro (rua, avenida etc)"
              type="text"
              name="street"
              placeholder="Insira a rua de resid??ncia"
              value={patientInformation.street}
              change={(event) =>
                handleChange('street', event.currentTarget.value)
              }
            />
            <Input
              label="N??mero"
              type="text"
              name="houseNumber"
              placeholder="Insira o n??mero da resid??ncia"
              value={patientInformation.houseNumber}
              change={(event) =>
                handleChange('houseNumber', event.currentTarget.value)
              }
            />
            <Input
              label="Complemento"
              type="text"
              name="complement"
              placeholder="Insira as informa????es complementares"
              value={patientInformation.complement}
              change={(event) =>
                handleChange('complement', event.currentTarget.value)
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
            ? 'Confirmar o cadastro do paciente?'
            : 'Confirmar altera????o dos dados do paciente?'
        }
        cancel={() => setOpenConfirmationModal(false)}
        confirm={handleSubmit}
      />
      <CancelationModal
        open={openCancelationModal}
        message={`Deseja realmente cancelar esta opera????o? Todos os dados modificados ser??o perdidos.`}
        cancel={() => setOpenCancelationModal(false)}
        confirm={handleCancel}
      />
    </>
  );
}
