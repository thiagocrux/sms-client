import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import api from '@utils/api';
import {
  examInitialValues as INITIAL_VALUES,
  trepTestResultOptions,
  trepTestTypeOptions,
  ubsOptions,
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
import Textarea from '@components/Layout/Form/Textarea/Textarea';
import ThematicBreak from '@components/Common/ThematicBreak/ThematicBreak';

import style from './ExamForm.module.css';

export default function ExamForm() {
  const [isCreationForm, setIsCreationForm] = useState('create');
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [examInformation, setExamInformation] = useState(INITIAL_VALUES);
  const { examID, patientID } = useParams();

  const history = useHistory();

  /* Input handlers */
  const handleChange = (field, value) => {
    setExamInformation({ ...examInformation, [field]: value });
  };

  /* Set the type of form on the first render */
  useEffect(() => {
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (examID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/patients/${patientID}/exams/${examID}`)
        .then((response) => setExamInformation(response.data.exam));
      setInputValues(examInformation);
    } else if (!examID && !isCreationForm) {
      setIsCreationForm(true);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setExamInformation(examInformation);
  }

  function handleFormModal(action) {
    if (action === 'submit') {
      setOpenConfirmationModal(true);
      console.log(examInformation);
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
    isCreationForm
      ? api
          .post(`/patients/${patientID}/exams`, examInformation)
          .then((response) => console.log(response))
      : api
          .patch(`/patients/${patientID}/exams/${examID}`, examInformation)
          .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.push(`/patients/${patientID}`);
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de exame
      </Heading>
      <Form>
        <Divider>
          <Heading size="medium" align="start" margin="small">
            Teste treponêmico
          </Heading>
          <div className={style.upperGridContainer}>
            <Select
              label="Tipo de teste"
              name="trepTestType"
              options={trepTestTypeOptions}
              value={examInformation.trepTestType}
              change={(event) =>
                handleChange('trepTestType', event.currentTarget.value)
              }
            />
            <Select
              label="Resultado do teste"
              name="trepTestResult"
              options={trepTestResultOptions}
              value={examInformation.trepTestResult}
              change={(event) =>
                handleChange('trepTestResult', event.currentTarget.value)
              }
            />
            <Input
              label="Data do teste"
              type="date"
              name="trepTestDate"
              value={examInformation.trepTestDate}
              change={(event) =>
                handleChange('trepTestDate', event.currentTarget.value)
              }
            />
            <Select
              label="Local do teste"
              name="trepTestLocation"
              options={ubsOptions}
              value={examInformation.trepTestLocation}
              change={(event) =>
                handleChange('trepTestLocation', event.currentTarget.value)
              }
            />
          </div>
          <ThematicBreak />
          <Heading size="medium" align="start" margin="small">
            Teste não-treponêmico
          </Heading>
          <div className={style.lowerGridContainer}>
            <Input
              label="VDRL"
              type="text"
              name="nonTrepTestVDRL"
              placeholder="Insira o VDRL"
              value={examInformation.nonTrepTestVDRL}
              change={(event) =>
                handleChange('nonTrepTestVDRL', event.currentTarget.value)
              }
            />
            <Input
              label="Titulação"
              type="text"
              name="nonTrepTestTitration"
              placeholder="Insira a titulação"
              value={examInformation.nonTrepTestTitration}
              change={(event) =>
                handleChange('nonTrepTestTitration', event.currentTarget.value)
              }
            />
            <Input
              label="Data do teste"
              type="date"
              name="nonTrepTestDate"
              value={examInformation.nonTrepTestDate}
              change={(event) =>
                handleChange('nonTrepTestDate', event.currentTarget.value)
              }
            />
            <Textarea
              label="Observações de referência e contra-referência"
              name="refObservations"
              placeholder="Insira as observações"
              value={examInformation.refObservations}
              change={(event) =>
                handleChange('refObservations', event.currentTarget.value)
              }
            />
          </div>
          <div className={style.flexContainer}>
            <Checkbox
              label="Em tratamento"
              type="checkbox"
              name="onTreatment"
              checked={examInformation.onTreatment}
              change={(event) =>
                handleChange('onTreatment', event.currentTarget.checked)
              }
            />
            <Checkbox
              label="Em monitoramento"
              type="checkbox"
              name="onMonitoring"
              checked={examInformation.onMonitoring}
              change={(event) =>
                handleChange('onMonitoring', event.currentTarget.checked)
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
            ? 'Confirmar o cadastro do exame?'
            : 'Confirmar alteração dos dados do exame?'
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
