import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import Joi from 'joi';
import {
  medicationOptions,
  treatmentInitialValues as INITIAL_VALUES,
  ubsOptions,
} from '@utils/formData';
import { validate } from '@utils/helpers';
import api from '@utils/api';

import Button from '@components/Common/Buttons/Button/Button';
import CancelationModal from '@components/Layout/Modals/CancelationModal/CancelationModal';
import ConfirmationModal from '@components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import Divider from '@components/Layout/Form/Divider/Divider';
import Form from '@components/Layout/Form/Form';
import Heading from '@components/Common/Heading/Heading';
import Input from '@components/Layout/Form/Input/Input';
import Select from '@components/Layout/Form/Select/Select';
import SubmitContainer from '@components/Layout/Form/SubmitContainer/SubmitContainer';
import Textarea from '@components/Layout/Form/Textarea/Textarea';

import style from './TreatmentForm.module.css';

const treatmentSchema = Joi.object({
  medication: Joi.string().required(),
  ubsLocation: Joi.string().required(),
  startDate: Joi.string().required(),
  dosage: Joi.string().required(),
  partnerInfo: Joi.string().allow(''),
  observations: Joi.string().allow(''),
});

export default function TreatmentForm() {
  const [isCreationForm, setIsCreationForm] = useState(true);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [treatmentInformation, setTreatmentInformation] =
    useState(INITIAL_VALUES);

  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const { treatmentID, patientID } = useParams();
  const history = useHistory();

  useEffect(() => {
    handleFormType();
    validate(treatmentSchema, treatmentInformation, setIsValid, setFormErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    validate(treatmentSchema, treatmentInformation, setIsValid, setFormErrors);
  }, [treatmentInformation]);

  const errorMessage = (field) => {
    const error = [...formErrors].find(({ label }) => label === field);
    if (error && isSubmitted) {
      console.log(isSubmitted);
      return error.message;
    } else {
      return;
    }
  };

  const handleChange = (field, value) => {
    setTreatmentInformation({ ...treatmentInformation, [field]: value });
  };

  function handleFormType() {
    if (treatmentID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/patients/${patientID}/treatments/${treatmentID}`)
        .then((response) => setTreatmentInformation(response.data.treatment));
      setInputValues(treatmentInformation);
    } else if (!treatmentID && !isCreationForm) {
      setIsCreationForm(true);
    }
  }

  function setInputValues() {
    setTreatmentInformation(treatmentInformation);
  }

  function handleFormModal(action) {
    setIsSubmitted(true);

    if (action === 'submit') {
      setOpenConfirmationModal(true);
      console.log(treatmentInformation);
    } else if (action === 'cancel') {
      setOpenCancelationModal(true);
    }
  }

  function handleSubmit() {
    isCreationForm
      ? api
          .post(`/patients/${patientID}/treatments`, treatmentInformation)
          .then((response) => setTreatmentInformation(response.data.treatment))
      : api
          .patch(
            `/patients/${patientID}/treatments/${treatmentID}`,
            treatmentInformation
          )
          .then((response) => setTreatmentInformation(response.data.treatment));

    setOpenConfirmationModal(false);
    history.goBack();
  }

  function handleCancel() {
    setOpenCancelationModal(false);
    history.push('/monitorings');
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de tratamento
      </Heading>
      <Form>
        <Divider>
          <Heading size="medium" align="start" margin="small">
            Informações sobre o tratamento
          </Heading>
          <div className={style.gridContainer}>
            <Select
              label="Medicamento"
              name="medication"
              options={medicationOptions}
              value={treatmentInformation.medication}
              change={(event) =>
                handleChange('medication', event.currentTarget.value)
              }
            >
              {errorMessage('medication')}
            </Select>
            <Select
              label="Localização da UBS"
              name="ubsLocation"
              options={ubsOptions}
              value={treatmentInformation.ubsLocation}
              change={(event) =>
                handleChange('ubsLocation', event.currentTarget.value)
              }
            >
              {errorMessage('ubsLocation')}
            </Select>
            <Input
              label="Data"
              type="date"
              name="startDate"
              value={treatmentInformation.startDate}
              change={(event) =>
                handleChange('startDate', event.currentTarget.value)
              }
            >
              {errorMessage('startDate')}
            </Input>
            <Input
              label="Dosagem"
              type="text"
              name="dosage"
              placeholder="Insira as informações sobre dosagem"
              value={treatmentInformation.dosage}
              change={(event) =>
                handleChange('dosage', event.currentTarget.value)
              }
            >
              {errorMessage('dosage')}
            </Input>
            <Textarea
              label="Observações sobre o tratamento"
              name="observations"
              placeholder="Insira as observações sobre o tratamento"
              value={treatmentInformation.observations}
              change={(event) =>
                handleChange('observations', event.currentTarget.value)
              }
            >
              {errorMessage('observations')}
            </Textarea>
            <Textarea
              label="Observações sobre parceiro(a)"
              name="partnerInfo"
              placeholder="Insira as informações sobre o parceiro(a)"
              value={treatmentInformation.partnerInfo}
              change={(event) =>
                handleChange('partnerInfo', event.currentTarget.value)
              }
            >
              {errorMessage('partnerInfo')}
            </Textarea>
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
            ? 'Confirmar o cadastro do tratamento?'
            : 'Confirmar alteração dos dados do tratamento?'
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
