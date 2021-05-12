import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Form from '../../components/Form/Form';
import SubmitContainer from '../../components/Form/SubmitContainer/SubmitContainer';
import Heading from '../../components/Heading/Heading';

import style from './Treatment.module.css';

/* TODO: Replace this logic for an API call with values coming from database */
const TREATMENT_DATA = {
  firstDoseLocation: 'URSS',
  firstDoseDate: '1917-03-08',
  secondDoseLocation: 'URSS',
  secondDoseDate: '1917-03-08',
  thirdDoseLocation: 'URSS',
  thirdDoseDate: '1917-03-08',
  otherTreatments: 'Substituir por valores dinâmicos!',
};

export default function Treatment() {
  const [formType, setFormType] = useState('create');
  const [treatmentInformation, setTreatmentInformation] = useState();
  const { id } = useParams();
  const firstDoseLocationInputRef = useRef();
  const firstDoseDateInputRef = useRef();
  const secondDateInputRef = useRef();
  const secondDoseLocationInputRef = useRef();
  const thirdDoseDateInputRef = useRef();
  const thirdDoseLocationInputRef = useRef();
  const otherTreatmentsInputRef = useRef();

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [Treatment] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(
    () => treatmentInformation && console.log(treatmentInformation),
    [treatmentInformation]
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
      firstDoseLocation: firstDoseLocationInputRef.current.value,
      firstDoseDate: firstDoseDateInputRef.current.value,
      secondDoseLocation: secondDoseLocationInputRef.current.value,
      secondDoseDate: secondDateInputRef.current.value,
      thirdDoseLocation: thirdDoseLocationInputRef.current.value,
      thirdDoseDate: thirdDoseDateInputRef.current.value,
      otherTreatments: otherTreatmentsInputRef.current.value,
    };
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    firstDoseLocationInputRef.current.value = TREATMENT_DATA.firstDoseLocation;
    firstDoseDateInputRef.current.value = TREATMENT_DATA.firstDoseDate;
    secondDoseLocationInputRef.current.value = TREATMENT_DATA.secondDoseLocation;
    secondDateInputRef.current.value = TREATMENT_DATA.secondDoseDate;
    thirdDoseLocationInputRef.current.value = TREATMENT_DATA.thirdDoseLocation;
    thirdDoseDateInputRef.current.value = TREATMENT_DATA.thirdDoseDate;
    otherTreatmentsInputRef.current.value = TREATMENT_DATA.otherTreatments;
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      const data = getInputValues();
      setTreatmentInformation(data);
      // TODO: Send values to database, according to the request (CREATE or UPDATE).
    } else if (action === 'cancel') {
      // TODO: Create logic for the form abortion.
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type="primary">Cadastro de tratamento</Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Penicilina BZ</Heading>
          <div className={style.container}>
            <Heading type="tertiary">1ª Dose</Heading>
            <Field>
              <label htmlFor="firstDoseLocation">Local UBS</label>
              <input
                ref={firstDoseLocationInputRef}
                type="text"
                name="firstDoseLocation"
                placeholder="Insira o local da primeira dose"
              />
            </Field>
            <Field>
              <label htmlFor="firstDoseDate">Data</label>
              <input ref={firstDoseDateInputRef} type="date" name="firstDoseDate" />
            </Field>
            <Heading type="tertiary">2ª Dose</Heading>
            <Field>
              <label htmlFor="secondDoseLocation">Local UBS</label>
              <input
                ref={secondDoseLocationInputRef}
                type="text"
                name="secondDoseLocation"
                placeholder="Insira o local da segunda dose"
              />
            </Field>
            <Field>
              <label htmlFor="secondDoseDate">Data</label>
              <input ref={secondDateInputRef} type="date" name="secondDoseDate" />
            </Field>
            <Heading type="tertiary">3ª Dose</Heading>
            <Field>
              <label htmlFor="thirdDoseLocation">Local UBS</label>
              <input
                ref={thirdDoseLocationInputRef}
                type="text"
                name="thirdDoseLocation"
                placeholder="Insira o local da terceira dose"
              />
            </Field>
            <Field>
              <label htmlFor="thirdDoseDate">Data</label>
              <input ref={thirdDoseDateInputRef} type="date" name="thirdDoseDate" />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Outro tratamento</Heading>
          <Field>
            <textarea
              ref={otherTreatmentsInputRef}
              name="otherTreatments"
              placeholder="Descreva o tratamento"
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
