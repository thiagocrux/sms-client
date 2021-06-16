import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { monitoringInitialValues } from '../../../../utils/mock';
import api from '../../../../utils/api';
import { formatDateToInput } from '../../../../utils/dataFormatter';

import Button from '../../../../components/Common/Button/Button';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import CancelationModal from '../../../../components/Layout/Modals/CancelationModal/CancelationModal';
import ThematicBreak from '../../../../components/Common/ThematicBreak/ThematicBreak';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Field from '../../../../components/Layout/Form/Field/Field';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './MonitoringForm.module.css';

const INITIAL_VALUES = monitoringInitialValues;

export default function MonitoringForm() {
  const [formType, setFormType] = useState('create');
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
    console.clear();
    console.log(`>> Component [Monitoring] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (monitoringID && formType !== 'update') {
      setFormType('update');
      api
        .get(`/patients/${patientID}/monitorings/${monitoringID}`)
        .then((response) => setMonitoringInformation(response.data.monitoring));
      setInputValues(monitoringInformation);
      console.log(formType);
    } else if (!monitoringID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
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
      /* TODO:
      1. Criar modal para confirmar cancelamento.
      */
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
    api
      .post(`/patients/${patientID}/monitorings`, monitoringInformation)
      .then((response) => console.log(response));
    setOpenConfirmationModal(false);
    history.goBack();
  }

  return (
    <>
      <Heading type="primary">
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de monitoramento
      </Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Pós-tratamento</Heading>
          <div className={style['grid-container']}>
            <Heading type="tertiary">1ª VDRL</Heading>
            <Field>
              <label htmlFor="vdrl1Date">Data</label>
              <input
                type="date"
                name="vdrl1Date"
                onChange={(event) =>
                  handleChange('vdrl1Date', event.currentTarget.value)
                }
                value={formatDateToInput(monitoringInformation.vdrl1Date)}
              />
            </Field>
            <Field>
              <label htmlFor="vdrl1Titration">Titulação</label>
              <input
                type="text"
                name="vdrl1Titration"
                placeholder="Insira a titulação"
                onChange={(event) =>
                  handleChange('vdrl1Titration', event.currentTarget.value)
                }
                value={monitoringInformation.vdrl1Titration}
              />
            </Field>
            <Heading type="tertiary">2ª VDRL</Heading>
            <Field>
              <label htmlFor="vdrl2Date">Data</label>
              <input
                type="date"
                name="vdrl2Date"
                onChange={(event) =>
                  handleChange('vdrl2Date', event.currentTarget.value)
                }
                value={formatDateToInput(monitoringInformation.vdrl2Date)}
              />
            </Field>
            <Field>
              <label htmlFor="vdrl2Titration">Titulação</label>
              <input
                type="text"
                name="vdrl2Titration"
                placeholder="Insira a titulação"
                onChange={(event) =>
                  handleChange('vdrl2Titration', event.currentTarget.value)
                }
                value={monitoringInformation.vdrl2Titration}
              />
            </Field>
            <Heading type="tertiary">3ª VDRL</Heading>
            <Field>
              <label htmlFor="vdrl3Date">Data</label>
              <input
                type="date"
                name="vdrl3Date"
                onChange={(event) =>
                  handleChange('vdrl3Date', event.currentTarget.value)
                }
                value={formatDateToInput(monitoringInformation.vdrl3Date)}
              />
            </Field>
            <Field>
              <label htmlFor="vdrl3Titration">Titulação</label>
              <input
                type="text"
                name="vdrl3Titration"
                placeholder="Insira a titulação"
                onChange={(event) =>
                  handleChange('vdrl3Titration', event.currentTarget.value)
                }
                value={monitoringInformation.vdrl3Titration}
              />
            </Field>
          </div>
          <Field>
            <div className={style['flex-container']}>
              <label htmlFor="partnerTreatment">Tratamento de parceiro</label>
              <input
                type="checkbox"
                name="partnerTreatment"
                onChange={(event) =>
                  handleChange('partnerTreatment', event.currentTarget.checked)
                }
                value={monitoringInformation.partnerTreatment}
              />
            </div>
          </Field>
          <ThematicBreak />
          <Heading type="secondary">Outras observações</Heading>
          <Field>
            <textarea
              name="observations"
              onChange={(event) =>
                handleChange('observations', event.currentTarget.value)
              }
              value={monitoringInformation.observations}
              placeholder="Insira as observações sobre o monitoramento"
            ></textarea>
          </Field>
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
        message="Confirmar novo monitoramento?"
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
