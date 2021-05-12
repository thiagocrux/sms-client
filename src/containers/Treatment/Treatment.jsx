import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Form from '../../components/Form/Form';
import SubmitContainer from '../../components/Form/SubmitContainer/SubmitContainer';
import Heading from '../../components/Heading/Heading';

import style from './Treatment.module.css';

// STUB: Delete when database is acessible.
const TEST_TREATMENT_VALUES = {
  firstDoseLocation: 'Cohab Massangano',
  firstDoseDate: '1917-03-08',
  secondDoseLocation: 'Gercino Coelho',
  secondDoseDate: '1917-03-08',
  thirdDoseLocation: 'Dom Avelar',
  thirdDoseDate: '1917-03-08',
  otherTreatments: 'Substituir por valores dinâmicos!',
};

const INITIAL_TREATMENT_VALUES = {
  firstDoseLocation: '',
  firstDoseDate: '',
  secondDoseLocation: '',
  secondDoseDate: '',
  thirdDoseLocation: '',
  thirdDoseDate: '',
  otherTreatments: '',
};

export default function Treatment() {
  const [formType, setFormType] = useState('create');
  const [treatmentInformation, setTreatmentInformation] = useState(INITIAL_TREATMENT_VALUES);
  const { treatmentID } = useParams();

  /* Input handlers */

  const handleFirstDoseLocationInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, firstDoseLocation: event.target.value });

  const handleFirstDoseDateInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, firstDoseDate: event.target.value });

  const handleSecondDoseLocationInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, secondDoseLocation: event.target.value });

  const handleSecondDoseDateInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, secondDoseDate: event.target.value });

  const handleThirdDoseLocationInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, thirdDoseLocation: event.target.value });

  const handleThirdDoseDateInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, thirdDoseDate: event.target.value });

  const handleOtherTreatmentsInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, otherTreatments: event.target.value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [TREATMENT] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(() => {
    if (treatmentInformation) {
      console.log(`FORM TYPE: ${formType}`);
      console.log(treatmentInformation);
    }
  }, [treatmentInformation, formType]);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (treatmentID && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!treatmentID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Get the data from the database and set the state with it.
    setTreatmentInformation(TEST_TREATMENT_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validate the data before saving it in the database.
        2. Send values to database, according to the request (CREATE or UPDATE).
      */
      console.log(treatmentInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Create logic for the form abortion.
      */
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
                type="text"
                name="firstDoseLocation"
                placeholder="Insira o local da primeira dose"
                value={treatmentInformation.firstDoseLocation}
                onChange={handleFirstDoseLocationInputChange}
              />
            </Field>
            <Field>
              <label htmlFor="firstDoseDate">Data</label>
              <input
                type="date"
                name="firstDoseDate"
                onChange={handleFirstDoseDateInputChange}
                value={treatmentInformation.firstDoseDate}
              />
            </Field>
            <Heading type="tertiary">2ª Dose</Heading>
            <Field>
              <label htmlFor="secondDoseLocation">Local UBS</label>
              <input
                type="text"
                name="secondDoseLocation"
                placeholder="Insira o local da segunda dose"
                value={treatmentInformation.secondDoseLocation}
                onChange={handleSecondDoseLocationInputChange}
              />
            </Field>
            <Field>
              <label htmlFor="secondDoseDate">Data</label>
              <input
                type="date"
                name="secondDoseDate"
                value={treatmentInformation.secondDoseDate}
                onChange={handleSecondDoseDateInputChange}
              />
            </Field>
            <Heading type="tertiary">3ª Dose</Heading>
            <Field>
              <label htmlFor="thirdDoseLocation">Local UBS</label>
              <input
                type="text"
                name="thirdDoseLocation"
                placeholder="Insira o local da terceira dose"
                value={treatmentInformation.thirdDoseLocation}
                onChange={handleThirdDoseLocationInputChange}
              />
            </Field>
            <Field>
              <label htmlFor="thirdDoseDate">Data</label>
              <input
                type="date"
                name="thirdDoseDate"
                value={treatmentInformation.thirdDoseDate}
                onChange={handleThirdDoseDateInputChange}
              />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Outro tratamento</Heading>
          <Field>
            <textarea
              name="otherTreatments"
              placeholder="Descreva o tratamento"
              value={treatmentInformation.otherTreatments}
              onChange={handleOtherTreatmentsInputChange}
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
