import React from 'react';
import { useHistory } from 'react-router';
import Button from '../Common/Button/Button';

function SelectedPatientInfo({ patientInfo }) {
  const { susCardNumber, cpf, name, socialName } = patientInfo;
  const history = useHistory();

  return (
    <div>
      <div>
        <p>SUS: {susCardNumber}</p>
        <p>Nome: {socialName !== '' ? socialName : name}</p>
        <p>CPF: {cpf}</p>
      </div>
      <Button action='submit' type='button' click={() => history.goBack()}>
        Escolher outro paciente
      </Button>
    </div>
  );
}

export default SelectedPatientInfo;