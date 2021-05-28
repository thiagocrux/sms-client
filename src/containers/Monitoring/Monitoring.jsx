import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { monitoringMockValues, monitoringInitialValues } from '../../utils';

import Button from '../../components/Common/Button/Button';
import Divider from '../../components/Layout/Form/Divider/Divider';
import Field from '../../components/Layout/Form/Field/Field';
import Form from '../../components/Layout/Form/Form';
import Heading from '../../components/Layout/Heading/Heading';
import SubmitContainer from '../../components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './Monitoring.module.css';

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const MOCK_VALUES = monitoringMockValues;
const INITIAL_VALUES = monitoringInitialValues;

export default function Monitoring() {
  const [formType, setFormType] = useState('create');
  const [monitoringInformation, setMonitoringInformation] = useState(INITIAL_VALUES);
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

  /* LOG: Mostra todas as informações submetidas pelo formulário no console */
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
      console.log(monitoringInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Criar lógica para o botão de cancelar.
      */
      console.log('Action cancelled!');
    }
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
