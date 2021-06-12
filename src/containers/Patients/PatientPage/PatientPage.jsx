import React, { useEffect, useState } from "react";
import axios from "axios";

import PatientList from "../../containers/PatientList/PatientList";
import PatientSearchForm from "../../containers/PatientSearchForm/PatientSearchForm";

import style from "./PatientPage.module.css";

export default function PatientSelected() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState({
    criterion: "susCardNumber",
    inputValue: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/patients/").then((response) => {
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
    <div className={style.patient}>
      <>
        <PatientSearchForm
          formHeader="Localize o paciente que deseja consultar"
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
        <PatientList filteredResult={filteredPatients} />
      </>
    </div>
  );
}
