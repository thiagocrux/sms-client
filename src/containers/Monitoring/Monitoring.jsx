import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Form from '../../components/Form/Form';
import SubmitContainer from '../../components/Form/SubmitContainer/SubmitContainer';
import Heading from '../../components/Heading/Heading';

import style from './Monitoring.module.css';

/* TODO: Replace this logic for an API call with values coming from database */
const MONITORING_DATA = {
  firstVDRLDate: '1917-03-08',
  secondVDRLDate: '1917-03-08',
  thirdVDRLDate: '1917-03-08',
  partnerTreatment: true,
  observations: 'Substituir por conteúdo dinâmico',
};

export default function Monitoring() {
  const [formType, setFormType] = useState('create');
  const [monitoringInformation, setMonitoringInformation] = useState();
  const { id } = useParams();
  const firstVDRLDateInputRef = useRef();
  const secondVDRLDateInputRef = useRef();
  const thirdVDRLDateInputRef = useRef();
  const partnerTreatmentInputRef = useRef();
  const observationsInputRef = useRef();

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [Monitoring] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(
    () => monitoringInformation && console.log(monitoringInformation),
    [monitoringInformation]
  );

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (id && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!id && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Get all the values from the form inputs */
  function getInputValues() {
    return {
      firstVDRLDate: firstVDRLDateInputRef.current.value,
      secondVDRLDate: secondVDRLDateInputRef.current.value,
      thirdVDRLDate: thirdVDRLDateInputRef.current.value,
      partnerTreatment: partnerTreatmentInputRef.current.checked,
      observations: observationsInputRef.current.value,
    };
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    firstVDRLDateInputRef.current.value = MONITORING_DATA.firstVDRLDate;
    secondVDRLDateInputRef.current.value = MONITORING_DATA.secondVDRLDate;
    thirdVDRLDateInputRef.current.value = MONITORING_DATA.thirdVDRLDate;
    partnerTreatmentInputRef.current.checked = MONITORING_DATA.partnerTreatment;
    observationsInputRef.current.value = MONITORING_DATA.observations;
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      const data = getInputValues();
      setMonitoringInformation(data);
      // TODO: Send values to database, according to the request (CREATE or UPDATE).
    } else if (action === 'cancel') {
      // TODO: Create logic for the form abortion.
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
              <input ref={firstVDRLDateInputRef} type="date" name="firstVDRLDate" />
            </Field>
            <Heading type="tertiary">2ª VDRL</Heading>
            <Field>
              <label htmlFor="secondVDRLDate">Data</label>
              <input ref={secondVDRLDateInputRef} type="date" name="secondVDRLDate" />
            </Field>
            <Heading type="tertiary">3ª VDRL</Heading>
            <Field>
              <label htmlFor="thirdVDRLDate">Data</label>
              <input ref={thirdVDRLDateInputRef} type="date" name="thirdVDRLDate" />
            </Field>
          </div>
          <Field>
            <div className={style['flex-container']}>
              <label htmlFor="partnerTreatment">Tratamento de parceiro</label>
              <input ref={partnerTreatmentInputRef} type="checkbox" name="partnerTreatment" />
            </div>
          </Field>
        </Divider>
        <Divider>
          <Heading type="secondary">Outras observações</Heading>
          <Field>
            <textarea
              ref={observationsInputRef}
              name="observations"
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
