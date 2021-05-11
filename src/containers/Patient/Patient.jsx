import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Form from '../../components/Form/Form';
import Heading from '../../components/Heading/Heading';
import SubmitContainer from '../../components/Form/SubmitContainer/SubmitContainer';

import style from './Patient.module.css';

/* TODO: Replace this logic for an API call with values coming from database */
const MONITORING_DATA = {
  susCardNumber: '136549846',
  name: 'Fulano Detail',
  notificationType: 'Sífilis adquirida',
  socialName: 'Fulano',
  gender: 'Masculino',
  nationality: 'Brasileiro',
  phone: '(87) 98804-6895',
  email: 'fulanodetail@email.com',
  motherName: 'Fulana Detail',
  zipCode: '56300000',
  state: 'Pernambuco',
  city: 'Petrolina',
  neighbourhood: 'Rua 49',
  street: 'Jardim São Paulo',
  houseNumber: '12',
};

export default function Patient() {
  const [formType, setFormType] = useState('create');
  const [patientInformation, setPatientInformation] = useState();
  const { id } = useParams();
  const susCardNumberInputRef = useRef();
  const nameInputRef = useRef();
  const notificationTypeInputRef = useRef();
  const socialNameInputRef = useRef();
  const genderInputRef = useRef();
  const nationalityInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const motherNameInputRef = useRef();
  const zipCodeInputRef = useRef();
  const stateInputRef = useRef();
  const cityInputRef = useRef();
  const neighbourhoodInputRef = useRef();
  const streetInputRef = useRef();
  const houseNumberInputRef = useRef();

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [Monitoring] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(() => patientInformation && console.log(patientInformation), [patientInformation]);

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
      susCardNumber: susCardNumberInputRef.current.value,
      name: nameInputRef.current.value,
      notificationType: notificationTypeInputRef.current.value,
      socialName: socialNameInputRef.current.value,
      gender: genderInputRef.current.value,
      nationality: nationalityInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      motherName: motherNameInputRef.current.value,
      zipCode: zipCodeInputRef.current.value,
      state: stateInputRef.current.value,
      city: cityInputRef.current.value,
      neighbourhood: neighbourhoodInputRef.current.value,
      street: streetInputRef.current.value,
      houseNumber: houseNumberInputRef.current.value,
    };
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    susCardNumberInputRef.current.value = MONITORING_DATA.susCardNumber;
    nameInputRef.current.value = MONITORING_DATA.name;
    notificationTypeInputRef.current.value = MONITORING_DATA.notificationType;
    socialNameInputRef.current.value = MONITORING_DATA.socialName;
    genderInputRef.current.value = MONITORING_DATA.gender;
    nationalityInputRef.current.value = MONITORING_DATA.nationality;
    phoneInputRef.current.value = MONITORING_DATA.phone;
    emailInputRef.current.value = MONITORING_DATA.email;
    motherNameInputRef.current.value = MONITORING_DATA.motherName;
    zipCodeInputRef.current.value = MONITORING_DATA.zipCode;
    stateInputRef.current.value = MONITORING_DATA.state;
    cityInputRef.current.value = MONITORING_DATA.city;
    neighbourhoodInputRef.current.value = MONITORING_DATA.neighbourhood;
    streetInputRef.current.value = MONITORING_DATA.street;
    houseNumberInputRef.current.value = MONITORING_DATA.houseNumber;
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      const data = getInputValues();
      setPatientInformation(data);
      // TODO: Send values to database, according to the request (CREATE or UPDATE).
    } else if (action === 'cancel') {
      // TODO: Create logic for the form abortion.
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type="primary">Cadastro de paciente</Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Dados do paciente</Heading>
          <div className={`${style['grid-container']} ${style['first-grid-container']}`}>
            <Field>
              <label htmlFor="susCardNumber">Código do SUS</label>
              <input ref={susCardNumberInputRef} placeholder="Insira o número do cartão do SUS" />
            </Field>
            <Field>
              <label htmlFor="name">Nome</label>
              <input ref={nameInputRef} placeholder="Insira o nome do paciente" />
            </Field>
            <Field>
              <label htmlFor="notificationType">Tipo de notificação</label>
              <select ref={notificationTypeInputRef}>
                <option value="">Selecione uma opção</option>
                <option value="Sífilis adquirida">Sífilis adquirida</option>
                <option value="Sífilis congênita">Sífilis congênita</option>
                <option value="Sífilis gestante">Sífilis gestante</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="socialName">Nome social</label>
              <input ref={socialNameInputRef} placeholder="Insira o nome do paciente" />
            </Field>
            <Field>
              <label htmlFor="gender">Sexo</label>
              <select ref={genderInputRef}>
                <option value="">Selecione uma opção</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="nationality">Naturalidade</label>
              <select ref={nationalityInputRef}>
                <option value="">Selecione uma opção</option>
                <option value="Brasileiro">Brasileiro</option>
                <option value="Naturalizado">Naturalizado</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="phone">Telefone</label>
              <input ref={phoneInputRef} placeholder="Insira o telefone do paciente" />
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input ref={emailInputRef} type="email" placeholder="Insira o e-mail do paciente" />
            </Field>
            <Field>
              <label htmlFor="motherName">Nome da mãe do paciente</label>
              <input ref={motherNameInputRef} placeholder="Insira o nome da mãe do paciente" />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Endereço do paciente</Heading>
          <div className={`${style['grid-container']} ${style['second-grid-container']}`}>
            <Field>
              <label htmlFor="zipCode">CEP</label>
              <input ref={zipCodeInputRef} placeholder="Insira o CEP da residência" />
            </Field>
            <Field>
              <label htmlFor="state">Estado</label>
              <input ref={stateInputRef} placeholder="Insira o estado de residência" />
            </Field>
            <Field>
              <label htmlFor="city">Cidade</label>
              <input ref={cityInputRef} placeholder="Insira a cidade de residência" />
            </Field>
            <Field>
              <label htmlFor="neighbourhood">Bairro</label>
              <input ref={neighbourhoodInputRef} placeholder="Insira o bairro de residência" />
            </Field>
            <Field>
              <label htmlFor="street">Logradouro</label>
              <input ref={streetInputRef} placeholder="Insira o CEP da residência" />
            </Field>
            <Field>
              <label htmlFor="houseNumber">Número da residência</label>
              <input ref={houseNumberInputRef} placeholder="Insira o número da residência" />
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
