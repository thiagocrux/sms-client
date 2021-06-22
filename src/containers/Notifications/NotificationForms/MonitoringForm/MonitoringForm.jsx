import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { monitoringInitialValues as INITIAL_VALUES } from '../../../../utils/formData';
import api from '../../../../utils/api';

import Button from '../../../../components/Common/Button/Button';
import CancelationModal from '../../../../components/Layout/Modals/CancelationModal/CancelationModal';
import Checkbox from '../../../../components/Layout/Form/Checkbox/Checkbox';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import ThematicBreak from '../../../../components/Common/ThematicBreak/ThematicBreak';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import Input from '../../../../components/Layout/Form/Input/Input';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import Textarea from '../../../../components/Layout/Form/Textarea/Textarea';

import style from './MonitoringForm.module.css';

export default function MonitoringForm() {
  const [isCreationForm, setIsCreationForm] = useState(true);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [monitoringInformation, setMonitoringInformation] =
    useState(INITIAL_VALUES);
  const { monitoringID, patientID } = useParams();

  const history = useHistory();

  /* Input handlers */
  const handleChange = (field, value) => {
    setMonitoringInformation({ ...monitoringInformation, [field]: value });
  };

  /* Set the type of form on the first render */
  useEffect(() => {
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (monitoringID && isCreationForm) {
      setIsCreationForm(false);
      api
        .get(`/patients/${patientID}/monitorings/${monitoringID}`)
        .then((response) => setMonitoringInformation(response.data.monitoring));
      setInputValues(monitoringInformation);
    } else if (!monitoringID && !isCreationForm) {
      setIsCreationForm(true);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setMonitoringInformation(monitoringInformation);
  }

  function handleFormModal(action) {
    if (action === 'submit') {
      setOpenConfirmationModal(true);
      console.log(monitoringInformation);
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
          .post(`/patients/${patientID}/monitorings`, monitoringInformation)
          .then((response) => console.log(response))
      : api
          .patch(
            `/patients/${patientID}/monitorings/${monitoringID}`,
            monitoringInformation
          )
          .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.push(`/patients/${patientID}`);
  }

  return (
    <>
      <Heading size="huge" align="center" margin="big">
        {isCreationForm ? 'Cadastro' : 'Atualização'} de monitoramento
      </Heading>
      <Form>
        <Divider>
          <Heading size="medium" align="start" margin="small">
            Pós-tratamento
          </Heading>
          <div className={style.gridContainer}>
            <Heading size="small" align="start" margin="tiny">
              1ª VDRL
            </Heading>
            <Input
              label="Titulação"
              type="text"
              name="vdrl1Titration"
              placeholder="Insira a titulação"
              value={monitoringInformation.vdrl1Titration}
              change={(event) =>
                handleChange('vdrl1Titration', event.currentTarget.value)
              }
            />
            <Input
              label="Data"
              type="date"
              name="vdrl1Date"
              value={monitoringInformation.vdrl1Date}
              change={(event) =>
                handleChange('vdrl1Date', event.currentTarget.value)
              }
            />
            <Heading size="small" align="start" margin="tiny">
              2ª VDRL
            </Heading>
            <Input
              label="Titulação"
              type="text"
              name="vdrl2Titration"
              placeholder="Insira a titulação"
              value={monitoringInformation.vdrl2Titration}
              change={(event) =>
                handleChange('vdrl2Titration', event.currentTarget.value)
              }
            />
            <Input
              label="Data"
              type="date"
              name="vdrl2Date"
              value={monitoringInformation.vdrl2Date}
              change={(event) =>
                handleChange('vdrl2Date', event.currentTarget.value)
              }
            />
            <Heading size="small" align="start" margin="tiny">
              3ª VDRL
            </Heading>
            <Input
              label="Titulação"
              type="text"
              name="vdrl3Titration"
              placeholder="Insira a titulação"
              value={monitoringInformation.vdrl3Titration}
              change={(event) =>
                handleChange('vdrl3Titration', event.currentTarget.value)
              }
            />
            <Input
              label="Data"
              type="date"
              name="vdrl3Date"
              value={monitoringInformation.vdrl3Date}
              change={(event) =>
                handleChange('vdrl3Date', event.currentTarget.value)
              }
            />
          </div>
          <Checkbox
            label="Tratamento de parceiro"
            type="checkbox"
            name="partnerTreatment"
            checked={monitoringInformation.partnerTreatment}
            change={(event) =>
              handleChange('partnerTreatment', event.currentTarget.checked)
            }
          />
          <ThematicBreak />
          <Heading size="medium" align="start" margin="small">
            Outras observações
          </Heading>
          <Textarea
            name="observations"
            placeholder="Insira as observações sobre o monitoramento"
            value={monitoringInformation.observations}
            change={(event) =>
              handleChange('observations', event.currentTarget.value)
            }
          />
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
            ? 'Confirmar o cadastro do monitoramento?'
            : 'Confirmar alteração dos dados do monitoramento?'
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
