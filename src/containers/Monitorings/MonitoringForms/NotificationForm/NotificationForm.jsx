import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Joi from 'joi';
import { validate } from '../../../../utils/helpers';
import api from '../../../../utils/api';
import { notificationInitialValues as INITIAL_VALUES } from '../../../../utils/formData';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

import Button from '../../../../components/Common/Buttons/Button/Button';
import CancelationModal from '../../../../components/Layout/Modals/CancelationModal/CancelationModal';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import Input from '../../../../components/Layout/Form/Input/Input';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import Textarea from '../../../../components/Layout/Form/Textarea/Textarea';

// import style from './ObservationForm.module.css';

const notificationSchema = Joi.object({
  sinan: Joi.string().required(),
  observations: Joi.string().allow(''),
});

export default function ObservationForm() {
  const [isCreationForm, setIsCreationForm] = useState(true);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [notificationInformation, setNotificationInformation] =
    useState(INITIAL_VALUES);

  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const { notificationID, patientID } = useParams();
  const history = useHistory();

  /* Set the type of form on the first render */
  useEffect(() => {
    handleFormType();
    validate(
      notificationSchema,
      notificationInformation,
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
      notificationSchema,
      notificationInformation,
      setIsValid,
      setFormErrors
    );
  }, [notificationInformation]);

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
    setNotificationInformation({ ...notificationInformation, [field]: value });
  };

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (notificationID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/patients/${patientID}/notifications/${notificationID}`)
        .then((response) =>
          setNotificationInformation(response.data.notification)
        );
      setInputValues(notificationInformation);
    } else if (!notificationID && !isCreationForm) {
      setIsCreationForm(true);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setNotificationInformation(notificationInformation);
  }

  function handleFormModal(action) {
    setIsSubmitted(true);

    if (action === 'submit') {
      setOpenConfirmationModal(true);
      console.log(notificationInformation);
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
          .post(`/patients/${patientID}/notifications`, notificationInformation)
          .then((response) => console.log(response))
      : api
          .patch(
            `/patients/${patientID}/notifications/${notificationID}`,
            notificationInformation
          )
          .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.goBack();
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de notificação
      </Heading>
      <Form>
        <Divider>
          <Input
            label="SINAN"
            name="sinan"
            placeholder="Insira o número do SINAN"
            value={notificationInformation.sinan}
            change={(event) => handleChange('sinan', event.currentTarget.value)}
          >
            {errorMessage('sinan')}
          </Input>
          <Textarea
            label="Observações"
            name="notifications"
            placeholder="Caso seja necessário, insira as observações sobre a notificação."
            value={notificationInformation.observations}
            change={(event) =>
              handleChange('observations', event.currentTarget.value)
            }
          >
            {errorMessage('observations')}
          </Textarea>
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
            ? 'Confirmar o cadastro da notificação?'
            : 'Confirmar alteração dos dados da notificação?'
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
