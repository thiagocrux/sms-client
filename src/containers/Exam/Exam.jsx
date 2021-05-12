import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Form from '../../components/Form/Form';
import SubmitContainer from '../../components/Form/SubmitContainer/SubmitContainer';
import Heading from '../../components/Heading/Heading';

import style from './Exam.module.css';

// STUB: Delete when database is acessible.
const TEST_EXAM_VALUES = {
  quickTest: 'Não reagente',
  FTA_ABS: 'Reagente',
  firstVDRLDate: '1993-08-30',
  firstVDRLTitration: 'Primeira',
  secondVDRLDate: '1993-08-31',
  secondVDRLTitration: 'Segunda',
  thirdVDRLDate: '1993-08-29',
  thirdVDRLTitration: 'Terceira',
  observationReferences: 'Colocar material dinâmico',
  onTreatment: true,
  onObservation: false,
};

const INITIAL_EXAM_VALUES = {
  quickTest: '',
  FTA_ABS: '',
  firstVDRLDate: '',
  firstVDRLTitration: '',
  secondVDRLDate: '',
  secondVDRLTitration: '',
  thirdVDRLDate: '',
  thirdVDRLTitration: '',
  observationReferences: '',
  onTreatment: false,
  onObservation: false,
};

export default function Exam() {
  const [formType, setFormType] = useState('create');
  const [examInformation, setExamInformation] = useState(INITIAL_EXAM_VALUES);
  const { examID } = useParams();

  /* Input handlers */
  const handleQuickTestInputChange = (event) =>
    setExamInformation({ ...examInformation, quickTest: event.target.value });

  const handleFTAABSInputChange = (event) =>
    setExamInformation({ ...examInformation, FTA_ABS: event.target.value });

  const handleFirstVDRLDateInputChange = (event) =>
    setExamInformation({ ...examInformation, firstVDRLDate: event.target.value });

  const handleFirstVDRLTitrationInputChange = (event) =>
    setExamInformation({ ...examInformation, firstVDRLTitration: event.target.value });

  const handleSecondVDRLDateInputChange = (event) =>
    setExamInformation({ ...examInformation, secondVDRLDate: event.target.value });

  const handleSecondVDRLTitrationInputChange = (event) =>
    setExamInformation({ ...examInformation, secondVDRLTitration: event.target.value });

  const handleThirdVDRLDateInputChange = (event) =>
    setExamInformation({ ...examInformation, thirdVDRLDate: event.target.value });

  const handleThirdVDRLTitrationInputChange = (event) =>
    setExamInformation({ ...examInformation, thirdVDRLTitration: event.target.value });

  const handleObservationReferencesInputChange = (event) =>
    setExamInformation({ ...examInformation, observationReferences: event.target.value });

  const handleOnTreatmentInputChange = (event) =>
    setExamInformation({ ...examInformation, onTreatment: event.target.checked });

  const handleOnObservationInputChange = (event) =>
    setExamInformation({ ...examInformation, onObservation: event.target.checked });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [EXAM] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(() => {
    if (examInformation) {
      console.log(`FORM TYPE: ${formType}`);
      console.log(examInformation);
    }
  }, [examInformation, formType]);

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
    // FIXME: Get the data from the database and set the state with it.
    setExamInformation(TEST_EXAM_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validate the data before saving it in the database.
        2. Send values to database, according to the request (CREATE or UPDATE).
      */
      console.log(examInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Create logic for the form abortion.
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
          <div className={`${style['grid-container']} ${style['first-grid-container']}`}>
            <Field>
              <label htmlFor="quickTest">Teste rápido</label>
              <select
                name="quickTest"
                onChange={handleQuickTestInputChange}
                value={examInformation.quickTest}
              >
                <option value="" disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value="Reagente">Reagente</option>
                <option value="Não reagente">Não reagente</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="fta-abs">FTA-ABS</label>
              <select
                name="fta-abs"
                onChange={handleFTAABSInputChange}
                value={examInformation.FTA_ABS}
              >
                <option value="" disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value="Reagente">Reagente</option>
                <option value="Não reagente">Não reagente</option>
              </select>
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Teste não treponêmico</Heading>
          <div className={`${style['grid-container']} ${style['second-grid-container']}`}>
            <Heading type="tertiary">1ª VDRL</Heading>
            <Field>
              <label htmlFor="firstVDRLDate">Data</label>
              <input
                type="date"
                name="firstVDRLDate"
                onChange={handleFirstVDRLDateInputChange}
                value={examInformation.firstVDRLDate}
              />
            </Field>
            <Field>
              <label htmlFor="firstVDRLTitration">Titulação</label>
              <input
                type="text"
                name="firstVDRLTitration"
                placeholder="Insira a titulação"
                onChange={handleFirstVDRLTitrationInputChange}
                value={examInformation.firstVDRLTitration}
              />
            </Field>
            <Heading type="tertiary">2ª VDRL</Heading>
            <Field>
              <label htmlFor="secondVDRLDate">Data</label>
              <input
                type="date"
                name="secondVDRLDate"
                onChange={handleSecondVDRLDateInputChange}
                value={examInformation.secondVDRLDate}
              />
            </Field>
            <Field>
              <label htmlFor="secondVDRLTitration">Titulação</label>
              <input
                type="text"
                name="secondVDRLTitration"
                placeholder="Insira a titulação"
                onChange={handleSecondVDRLTitrationInputChange}
                value={examInformation.secondVDRLTitration}
              />
            </Field>
            <Heading type="tertiary">3ª VDRL</Heading>
            <Field>
              <label htmlFor="thirdVDRLDate">Data</label>
              <input
                type="date"
                name="thirdVDRLDate"
                onChange={handleThirdVDRLDateInputChange}
                value={examInformation.thirdVDRLDate}
              />
            </Field>
            <Field>
              <label htmlFor="thirdVDRLTitration">Titulação</label>
              <input
                type="text"
                name="thirdVDRLTitration"
                placeholder="Insira a titulação"
                onChange={handleThirdVDRLTitrationInputChange}
                value={examInformation.thirdVDRLTitration}
              />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Observação sobre a referência e a contra-referência</Heading>
          <Field>
            <textarea
              name="observationReferences"
              placeholder="Insira as observações"
              onChange={handleObservationReferencesInputChange}
              value={examInformation.observationReferences}
            ></textarea>
          </Field>
        </Divider>
        <Divider>
          <Heading type="secondary">Classificação clínica</Heading>
          <div className={style['flex-container']}>
            <Field>
              <div className={style['checkbox-container']}>
                <label htmlFor="onTreatment">Em tratamento</label>
                <input
                  type="checkbox"
                  name="onTreatment"
                  onChange={handleOnTreatmentInputChange}
                  checked={examInformation.onTreatment}
                />
              </div>
            </Field>
            <Field>
              <div className={style['checkbox-container']}>
                <label htmlFor="onObservation">Em observação</label>
                <input
                  type="checkbox"
                  name="onObservation"
                  onChange={handleOnObservationInputChange}
                  checked={examInformation.onObservation}
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
