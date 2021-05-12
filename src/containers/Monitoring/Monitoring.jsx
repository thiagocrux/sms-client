import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Form from '../../components/Form/Form';
import SubmitContainer from '../../components/Form/SubmitContainer/SubmitContainer';
import Heading from '../../components/Heading/Heading';

import style from './Monitoring.module.css';

// FIXME: Delete when database is acessible.
const TEST_MONITORING_VALUES = {
  firstVDRLDate: '1917-03-08',
  secondVDRLDate: '1917-03-08',
  thirdVDRLDate: '1917-03-08',
  partnerTreatment: true,
  observations: 'Substituir por conteúdo dinâmico',
};

const INITIAL_MONITORING_VALUES = {
  firstVDRLDate: '',
  secondVDRLDate: '',
  thirdVDRLDate: '',
  partnerTreatment: false,
  observations: '',
};

export default function Monitoring() {
  const [formType, setFormType] = useState('create');
  const [monitoringInformation, setMonitoringInformation] = useState(INITIAL_MONITORING_VALUES);
  const { monitoringID } = useParams();

  /* Input handlers */
  const handleFirstVDRLDateInputChange = (event) =>
    setMonitoringInformation({
      ...monitoringInformation,
      firstVDRLDate: event.target.value,
    });

  const handleSecondVDRLDateInputChange = (event) =>
    setMonitoringInformation({
      ...monitoringInformation,
      secondVDRLDate: event.target.value,
    });

  const handleThirdVDRLDateInputChange = (event) =>
    setMonitoringInformation({
      ...monitoringInformation,
      thirdVDRLDate: event.target.value,
    });

  const handlePartnerTreatmentInputChange = (event) =>
    setMonitoringInformation({
      ...monitoringInformation,
      partnerTreatment: event.target.checked,
    });

  const handleObservationsInputChange = (event) =>
    setMonitoringInformation({
      ...monitoringInformation,
      observations: event.target.value,
    });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [Monitoring] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(() => {
    if (monitoringInformation) {
      console.log(`FORM TYPE: ${formType}`);
      console.log(monitoringInformation);
    }
  }, [monitoringInformation, formType]);

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
    // FIXME: Get the data from the database and set the state with it.
    setMonitoringInformation(TEST_MONITORING_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validate the data before saving it in the database.
        2. Send values to database, according to the request (CREATE or UPDATE).
      */
      console.log(monitoringInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Create logic for the form abortion.
      */
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type="primary">Cadastro de monitoramento</Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Pós-tratamento</Heading>
          <div className={style['grid-container']}>
            <Heading type="tertiary">1ª VDRL</Heading>
            <Field>
              <label htmlFor="firstVDRLDate">Data</label>
              <input
                type="date"
                name="firstVDRLDate"
                onChange={handleFirstVDRLDateInputChange}
                value={monitoringInformation.firstVDRLDate}
              />
            </Field>
            <Heading type="tertiary">2ª VDRL</Heading>
            <Field>
              <label htmlFor="secondVDRLDate">Data</label>
              <input
                type="date"
                name="secondVDRLDate"
                onChange={handleSecondVDRLDateInputChange}
                value={monitoringInformation.secondVDRLDate}
              />
            </Field>
            <Heading type="tertiary">3ª VDRL</Heading>
            <Field>
              <label htmlFor="thirdVDRLDate">Data</label>
              <input
                type="date"
                name="thirdVDRLDate"
                onChange={handleThirdVDRLDateInputChange}
                value={monitoringInformation.thirdVDRLDate}
              />
            </Field>
          </div>
          <Field>
            <div className={style['flex-container']}>
              <label htmlFor="partnerTreatment">Tratamento de parceiro</label>
              <input
                type="checkbox"
                name="partnerTreatment"
                onChange={handlePartnerTreatmentInputChange}
                value={monitoringInformation.partnerTreatment}
              />
            </div>
          </Field>
        </Divider>
        <Divider>
          <Heading type="secondary">Outras observações</Heading>
          <Field>
            <textarea
              name="observations"
              onChange={handleObservationsInputChange}
              value={monitoringInformation.observations}
              placeholder="Insira as observações sobre o monitoramento"
            ></textarea>
          </Field>
        </Divider>
        <SubmitContainer>
          <Button type="button" action="cancel" click={handleButtonClick}>
            Cancelar
          </Button>
          <Button type="button" action="submit" click={handleButtonClick}>
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
    </>
  );
}
