import React, { useEffect, useState } from 'react';
import api from '@utils/api';

import PatientList from '../../Patients/PatientList/PatientList';
import PatientSearchForm from '../../Patients/PatientSearchForm/PatientSearchForm';

import style from './NotificationPage.module.css';

export default function NotificationPage() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState({
    criterion: 'susCardNumber',
    inputValue: '',
  });

  useEffect(() => {
    api.get('/patients/').then((response) => {
      setPatients(response.data.patients);
    });
  }, []);

  useEffect(() => {
    const { criterion, inputValue } = search;

    const filter = patients.filter((filteredPatients) => {
      const key = Object.keys(filteredPatients).filter(
        (key) => key === criterion
      );
      return filteredPatients[key]
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });

    setFilteredPatients(filter);
  }, [patients, search]);

  const handleSubmit = () => {
    const { criterion, inputValue } = search;

    const filteredPatient = patients.filter((patient) => {
      const key = Object.keys(patient).filter((key) => key === criterion);
      return patient[key].toLowerCase() === inputValue.toLowerCase();
    });
    setFilteredPatients(filteredPatient);
  };

  return (
    <div className={style.notification}>
      <PatientSearchForm
        formHeader="Localize o paciente que será notificado"
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <PatientList filteredResult={filteredPatients} />
    </div>
  );
}
