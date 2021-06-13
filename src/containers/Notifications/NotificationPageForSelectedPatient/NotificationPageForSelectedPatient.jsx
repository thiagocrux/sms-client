import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import PatientSelected from '../../Patients/PatientSelected/PatientSelected';
import NotificationOptions from '../NotificationOptions/NotificationOptions';

// import style from './NotificationPageForSelectedPatient.module.css';

export default function NotificationPageForSelectedPatient() {
  const [patient, setPatient] = useState();
  const { patientID } = useParams();
  const history = useHistory();

  // Get the data of the patient whose ID is the same as the one received as a request parameter when the component is mounted
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/patients/${patientID}`).then((response) => {
      console.log(response.data.patient);
      setPatient(response.data.patient);
    });
  }, []);

  function handleClick(url) {
    history.push(url);
  }

  return (
    <div>
      {patient && (
        <>
          <PatientSelected patient={patient} />
          <NotificationOptions isCreation={true} click={handleClick} />
        </>
      )}
    </div>
  );
}