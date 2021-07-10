import React, { useEffect, useState } from 'react';
import api from '@utils/api';

import LoadingAnimation from '@components/Common/LoadingAnimation/LoadingAnimation';
import PatientList from '../../Patients/PatientList/PatientList';
import PatientSearchForm from '../../Patients/PatientSearchForm/PatientSearchForm';

import style from './MonitoringPage.module.css';

export default function MonitoringPage() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState({
    criterion: 'susCardNumber',
    inputValue: '',
  });
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('/patients/').then((response) => {
      setPatients(response.data.patients);
    });
    setIsLoading(false);
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
    <div className={style.monitoring}>
      <PatientSearchForm
        formHeader="Localize o paciente que será notificado"
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <PatientList filteredResult={filteredPatients} />
      )}
    </div>
  );
}
