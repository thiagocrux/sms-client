import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PatientSelected from '../PatientSelected/PatientSelected';
import ExamsList from '../../../containers/Notifications/NotificationList/ExamsList/ExamsList';
import MonitoringsList from '../../../containers/Notifications/NotificationList/MonitoringsList/MonitoringsList';
import TreatmentsList from '../../../containers/Notifications/NotificationList/TreatmentsList/TreatmentsList';
import NotificationOptions from '../../Notifications/NotificationOptions/NotificationOptions';

import api from '../../../utils/api';

export default function PatientPageForSelectedPatient() {
  const [patient, setPatient] = useState();
  const [patientExams, setPatientExams] = useState([]);
  const [displayExams, setDisplayExams] = useState(false);
  const [patientMonitorings, setPatientMonitorings] = useState([]);
  const [displayMonitorings, setDisplayMonitorings] = useState(false);
  const [patientTreatments, setPatientTreatments] = useState([]);
  const [displayTreatments, setDisplayTreatments] = useState(false);
  const { patientID } = useParams();

  // Get the data of the patient whose ID is the same as the one received as a request parameter when the component is mounted
  useEffect(() => {
    api.get(`/patients/${patientID}`).then((response) => {
      console.log(response.data.patient);
      setPatient(response.data.patient);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get the exams of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/exams`).then((response) => {
      console.log(response.data.exams);
      setPatientExams(response.data.exams);
    });
  }, [patientID]);

  // Get the monitorings of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/monitorings`).then((response) => {
      console.log(response.data.monitorings);
      setPatientMonitorings(response.data.monitorings);
    });
  }, [patientID]);

  // Get the treatments of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/treatments`).then((response) => {
      console.log(response.data.treatments);
      setPatientTreatments(response.data.treatments);
    });
  }, [patientID]);

  function showExams() {
    setDisplayExams(true);
    setDisplayMonitorings(false);
    setDisplayTreatments(false);
  }

  function showMonitorings() {
    setDisplayExams(false);
    setDisplayMonitorings(true);
    setDisplayTreatments(false);
  }

  function showTreatments() {
    setDisplayExams(false);
    setDisplayMonitorings(false);
    setDisplayTreatments(true);
  }

  function handleClick(type) {
    type === 'treatment'
      ? showTreatments()
      : type === 'monitoring'
      ? showMonitorings()
      : showExams();
  }

  return (
    <div>
      {patient && (
        <>
          <PatientSelected patient={patient} />
          <NotificationOptions isCreation={false} click={handleClick} />
          {displayExams && <ExamsList exams={patientExams} />}
          {displayMonitorings && (
            <MonitoringsList monitorings={patientMonitorings} />
          )}
          {displayTreatments && (
            <TreatmentsList treatments={patientTreatments} />
          )}
        </>
      )}
    </div>
  );
}
