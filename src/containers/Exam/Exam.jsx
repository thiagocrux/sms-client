import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { examInitialValues, examMockedValues } from '../../utils/mock';

import Button from '../../components/Common/Button/Button';
import Divider from '../../components/Layout/Form/Divider/Divider';
import Field from '../../components/Layout/Form/Field/Field';
import Form from '../../components/Layout/Form/Form';
import Heading from '../../components/Layout/Heading/Heading';
import SubmitContainer from '../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ThematicBreak from '../../components/Common/ThematicBreak/ThematicBreak';

import style from './Exam.module.css';

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const MOCK_VALUES = examMockedValues;
const INITIAL_VALUES = examInitialValues;

export default function Exam() {
  const [formType, setFormType] = useState('create');
  const [examInformation, setExamInformation] = useState(INITIAL_VALUES);
  const { examID } = useParams();

  /* Input handlers */
  const handleChange = (field, value) => setExamInformation({ ...examInformation, [field]: value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [EXAM] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Mostra todas as informações submetidas pelo formulário no console */
  // useEffect(() => {
  //   if (examInformation) {
  //     console.log(`FORM TYPE: ${formType}`);
  //     console.log(examInformation);
  //   }
  // }, [examInformation, formType]);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (examID && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!examID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Buscar informações no banco de dados e substituir o objeto abaixo.
    setExamInformation(MOCK_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */
      console.log(examInformation);
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
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de exame
      </Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Teste treponêmico</Heading>
          <div className={style.trepTestGridContainer}>
            <Field>
              <label htmlFor="trepTestType">Tipo de teste</label>
              <select
                name="trepTestType"
                onChange={(event) => handleChange('trepTestType', event.currentTarget.value)}
                value={examInformation.trepTestType}
              >
                <option value="" selected disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Teste rápido">Teste rápido</option>
                <option value="FTA-ABS IgM">FTA-ABS IgM</option>
                <option value="FTA-ABS IgG">FTA-ABS IgG</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="trepTestResult">Resultado do teste</label>
              <select
                name="trepTestResult"
                onChange={(event) => handleChange('trepTestResult', event.currentTarget.value)}
                value={examInformation.trepTestResult}
              >
                <option value="" selected disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Reagente">Reagente</option>
                <option value="Não reagente">Não reagente</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="trepTestDate">Data do teste</label>
              <input
                type="date"
                name="trepTestDate"
                onChange={(event) => handleChange('trepTestDate', event.currentTarget.value)}
                value={examInformation.trepTestDate}
              />
            </Field>
            <Field>
              <label htmlFor="trepTestLocation">Local do teste</label>
              <select
                name="trepTestLocation"
                onChange={(event) => handleChange('trepTestLocation', event.currentTarget.value)}
                value={examInformation.trepTestLocation}
              >
                <option value="" selected disabled hidden>
                  Selecione uma opção
                </option>
                <option value="UBS">UBS</option>
                <option value="CTA/SAE">CTA/SAE</option>
              </select>
            </Field>
          </div>
          <ThematicBreak />
          <Heading type="secondary">Teste não-treponêmico</Heading>
          <div className={style.nonTrepTestGridContainer}>
            <Field>
              <label htmlFor="nonTrepTestVDRL">VDRL</label>
              <input
                type="text"
                name="nonTrepTestVDRL"
                placeholder="Insira o VDRL"
                onChange={(event) => handleChange('nonTrepTestVDRL', event.currentTarget.value)}
                value={examInformation.nonTrepTestVDRL}
              />
            </Field>
            <Field>
              <label htmlFor="nonTrepTestTitration">Titulação</label>
              <input
                type="text"
                name="nonTrepTestTitration"
                placeholder="Insira a titulação"
                onChange={(event) =>
                  handleChange('nonTrepTestTitration', event.currentTarget.value)
                }
                value={examInformation.nonTrepTestTitration}
              />
            </Field>
            <Field>
              <label htmlFor="nonTrepTestDate">Data do teste</label>
              <input
                type="date"
                name="nonTrepTestDate"
                onChange={(event) => handleChange('nonTrepTestDate', event.currentTarget.value)}
                value={examInformation.nonTrepTestDate}
              />
            </Field>
            <Field>
              <label htmlFor="refObservations">Observações de referência e contra-referência</label>
              <textarea
                type="date"
                name="refObservations"
                placeholder="Insira as observações"
                onChange={(event) => handleChange('refObservations', event.currentTarget.value)}
                value={examInformation.refObservations}
              />
            </Field>
          </div>
          <div className={style.nonTrepTestCheckboxContainer}>
            <Field>
              <div className={style.flexContainer}>
                <label htmlFor="onTreatment">Em tratamento</label>
                <input
                  type="checkbox"
                  name="onTreatment"
                  onChange={(event) => handleChange('onTreatment', event.currentTarget.checked)}
                  value={examInformation.onTreatment}
                />
              </div>
            </Field>
            <Field>
              <div className={style.flexContainer}>
                <label htmlFor="onMonitoring">Em monitoramento</label>
                <input
                  type="checkbox"
                  name="onMonitoring"
                  onChange={(event) => handleChange('onMonitoring', event.currentTarget.checked)}
                  value={examInformation.onMonitoring}
                />
              </div>
            </Field>
          </div>
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
