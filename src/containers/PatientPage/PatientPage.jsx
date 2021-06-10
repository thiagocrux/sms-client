import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

import List from "../../components/Patients/List/List";
import SearchForm from "../../components/Patients/SearchForm/SearchForm";
import SelectedPatientInfo from "../../components/SelectedPatientInfo/SelectedPatientInfo";

import style from "./Patient.module.css";

export default function PatientPage() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState({
    criterion: "susCardNumber",
    inputValue: "",
  });

  const { state } = useLocation();
  const patientInfo = { ...state };

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

    console.log("Patient:", filteredPatient);
    setFilteredPatients(filteredPatient);
  };

  return (
    <div className={style.patient}>
      {patientInfo._id ? (
        <>
          <SelectedPatientInfo patientInfo={patientInfo} />
        </>
      ) : (
        <>
          <SearchForm
            formHeader="Localize o paciente que deseja consultar"
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
          />
          <List filteredResult={filteredPatients} />
        </>
      )}
    </div>
  );
}
