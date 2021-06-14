import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  monitoringMockedValues,
  monitoringInitialValues,
} from '../../../../utils/mock';

import Button from '../../../../components/Common/Button/Button';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Field from '../../../../components/Layout/Form/Field/Field';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';

import api from '../../../../utils/api';

import style from './MonitoringForm.module.css';

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const MOCK_VALUES = monitoringMockedValues;
const INITIAL_VALUES = monitoringInitialValues;

export default function MonitoringForm() {
  const [formType, setFormType] = useState('create');
  const [openModal, setOpenModal] = useState(false);
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
      setInputValues();
      console.log(formType);
    } else if (!monitoringID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Buscar informações no banco de dados e substituir o objeto abaixo.
    setMonitoringInformation(MOCK_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */

      setOpenModal(true);
      console.log(monitoringInformation);
    } else if (action === 'cancel') {
      history.push('/notifications');
      /* TODO:
        1. Criar modal para confirmar cancelamento.
      */
    }
  }

  function handleSubmit() {
    api
      .post(`/patients/${patientID}/monitorings`, monitoringInformation)
      .then(response => console.log(response));
    setOpenModal(false);
    history.goBack();
  }

  return (
    <>
      <Heading type='primary'>
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de monitoramento
      </Heading>
      <Form>
        <Divider>
          <Heading type='secondary'>Pós-tratamento</Heading>
          <div className={style['grid-container']}>
            <Heading type='tertiary'>1ª VDRL</Heading>
            <Field>
              <label htmlFor='firstVDRLDate'>Data</label>
              <input
                type='date'
                name='firstVDRLDate'
                onChange={event =>
                  handleChange('firstVDRLDate', event.currentTarget.value)
                }
                value={monitoringInformation.firstVDRLDate}
              />
            </Field>
            <Field>
              <label htmlFor='firstVDRLTitration'>Titulação</label>
              <input
                type='text'
                name='firstVDRLTitration'
                placeholder='Insira a titulação'
                onChange={event =>
                  handleChange('firstVDRLTitration', event.currentTarget.value)
                }
                value={monitoringInformation.firstVDRLTitration}
              />
            </Field>
            <Heading type='tertiary'>2ª VDRL</Heading>
            <Field>
              <label htmlFor='secondVDRLDate'>Data</label>
              <input
                type='date'
                name='secondVDRLDate'
                onChange={event =>
                  handleChange('secondVDRLDate', event.currentTarget.value)
                }
                value={monitoringInformation.secondVDRLDate}
              />
            </Field>
            <Field>
              <label htmlFor='secondVDRLTitration'>Titulação</label>
              <input
                type='text'
                name='secondVDRLTitration'
                placeholder='Insira a titulação'
                onChange={event =>
                  handleChange('secondVDRLTitration', event.currentTarget.value)
                }
                value={monitoringInformation.secondVDRLTitration}
              />
            </Field>
            <Heading type='tertiary'>3ª VDRL</Heading>
            <Field>
              <label htmlFor='thirdVDRLDate'>Data</label>
              <input
                type='date'
                name='thirdVDRLDate'
                onChange={event =>
                  handleChange('thirdVDRLDate', event.currentTarget.value)
                }
                value={monitoringInformation.thirdVDRLDate}
              />
            </Field>
            <Field>
              <label htmlFor='thirdVDRLTituladion'>Titulação</label>
              <input
                type='text'
                name='thirdVDRLTitration'
                placeholder='Insira a titulação'
                onChange={event =>
                  handleChange('thirdVDRLTitration', event.currentTarget.value)
                }
                value={monitoringInformation.thirdVDRLTitration}
              />
            </Field>
          </div>
          <Field>
            <div className={style['flex-container']}>
              <label htmlFor='partnerTreatment'>Tratamento de parceiro</label>
              <input
                type='checkbox'
                name='partnerTreatment'
                onChange={event =>
                  handleChange('partnerTreatment', event.currentTarget.checked)
                }
                value={monitoringInformation.partnerTreatment}
              />
            </div>
          </Field>
        </Divider>
        <Divider>
          <Heading type='secondary'>Outras observações</Heading>
          <Field>
            <textarea
              name='observations'
              onChange={event =>
                handleChange('observations', event.currentTarget.value)
              }
              value={monitoringInformation.observations}
              placeholder='Insira as observações sobre o monitoramento'
            ></textarea>
          </Field>
        </Divider>
        <SubmitContainer>
          <Button
            type='button'
            action='cancel'
            click={() => handleButtonClick('cancel')}
          >
            Cancelar
          </Button>
          <Button
            type='button'
            action='submit'
            click={() => handleButtonClick('submit')}
          >
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
      <ConfirmationModal
        open={openModal}
        message='Confirmar novo monitoramento?'
        handleCancel={() => setOpenModal(false)}
        handleConfirm={handleSubmit}
      />
    </>
  );
}
