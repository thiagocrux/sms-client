import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../../utils/api';

import PatientSelected from '../../Patients/PatientSelected/PatientSelected';
import MonitoringOptions from '../MonitoringOptions/MonitoringOptions';

// import style from './MonitoringPageForSelectedPatient.module.css';

export default function MonitoringPageForSelectedPatient() {
  const [patient, setPatient] = useState();
  const { patientID } = useParams();
  const history = useHistory();

  // Get the data of the patient whose ID is the same as the one received as a request parameter when the component is mounted
  useEffect(() => {
    api.get(`/patients/${patientID}`).then((response) => {
      console.log(response.data.patient);
      setPatient(response.data.patient);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(url) {
    history.push(url);
  }

  return (
    <div>
      {patient && (
        <>
          <PatientSelected patient={patient} />
          <MonitoringOptions isCreation={true} click={handleClick} />
        </>
      )}
    </div>
  );
}
