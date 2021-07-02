import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Joi from 'joi';
import { validate } from '../../../../utils/helpers';
import api from '../../../../utils/api';
import { observationInitialValues as INITIAL_VALUES } from '../../../../utils/formData';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

import Button from '../../../../components/Common/Buttons/Button/Button';
import CancelationModal from '../../../../components/Layout/Modals/CancelationModal/CancelationModal';
import Checkbox from '../../../../components/Layout/Form/Checkbox/Checkbox';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import Textarea from '../../../../components/Layout/Form/Textarea/Textarea';

// import style from './ObservationForm.module.css';

const observationSchema = Joi.object({
  partnerTreatment: Joi.boolean().required(),
  observations: Joi.string().required(),
});

export default function ObservationForm() {
  const [isCreationForm, setIsCreationForm] = useState(true);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [observationInformation, setObservationInformation] =
    useState(INITIAL_VALUES);

  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const { observationID, patientID } = useParams();
  const history = useHistory();

  /* Set the type of form on the first render */
  useEffect(() => {
    handleFormType();
    validate(
      observationSchema,
      observationInformation,
      setIsValid,
      setFormErrors
    );
    return () => {
      setIsSubmitted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    validate(
      observationSchema,
      observationInformation,
      setIsValid,
      setFormErrors
    );
  }, [observationInformation]);

  const errorMessage = (field) => {
    const error = [...formErrors].find(({ label }) => label === field);
    if (error && isSubmitted) {
      return String(error.message);
    } else {
      return;
    }
  };

  /* Input handlers */
  const handleChange = (field, value) => {
    setObservationInformation({ ...observationInformation, [field]: value });
  };

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (observationID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/patients/${patientID}/observations/${observationID}`)
        .then((response) =>
          setObservationInformation(response.data.observation)
        );
      setInputValues(observationInformation);
    } else if (!observationID && !isCreationForm) {
      setIsCreationForm(true);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setObservationInformation(observationInformation);
  }

  function handleFormModal(action) {
    setIsSubmitted(true);

    if (action === 'submit') {
      setOpenConfirmationModal(true);
      console.log(observationInformation);
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
    isCreationForm
      ? api
          .post(`/patients/${patientID}/observations`, observationInformation)
          .then((response) => console.log(response))
      : api
          .patch(
            `/patients/${patientID}/observations/${observationID}`,
            observationInformation
          )
          .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.goBack();
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de observação
      </Heading>
      <Form>
        <Divider>
          <Heading size="small" align="start" margin="tiny">
            Outras observações
          </Heading>
          <Textarea
            name="observations"
            placeholder="Insira as observações sobre o monitoramento"
            value={observationInformation.observations}
            change={(event) =>
              handleChange('observations', event.currentTarget.value)
            }
          >
            {errorMessage('observations')}
          </Textarea>
          <Checkbox
            label="Tratamento de parceiro"
            name="partnerTreatment"
            checked={observationInformation.partnerTreatment}
            change={(event) =>
              handleChange('partnerTreatment', event.currentTarget.checked)
            }
          />
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
            ? 'Confirmar o cadastro da observação?'
            : 'Confirmar alteração dos dados da observação?'
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
