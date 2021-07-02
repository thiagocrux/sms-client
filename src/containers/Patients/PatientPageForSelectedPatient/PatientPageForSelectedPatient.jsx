/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ExamsList from '../../../containers/Monitorings/MonitoringList/ExamsList/ExamsList';
import NotificationsList from '../../../containers/Monitorings/MonitoringList/NotificationsList/NotificationsList';
import ObservationsList from '../../../containers/Monitorings/MonitoringList/ObservationsList/ObservationsList';
import TreatmentsList from '../../../containers/Monitorings/MonitoringList/TreatmentsList/TreatmentsList';
import PatientSelected from '../PatientSelected/PatientSelected';
import MonitoringOptions from '../../Monitorings/MonitoringOptions/MonitoringOptions';

import api from '../../../utils/api';

export default function PatientPageForSelectedPatient() {
  const [patient, setPatient] = useState();
  const [patientExams, setPatientExams] = useState([]);
  const [displayExams, setDisplayExams] = useState(false);
  const [patientNotifications, setPatientNotifications] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState(false);
  const [patientObservations, setPatientObservations] = useState([]);
  const [displayObservations, setDisplayObservations] = useState(false);
  const [patientTreatments, setPatientTreatments] = useState([]);
  const [displayTreatments, setDisplayTreatments] = useState(false);
  const { patientID } = useParams();

  // Get the data of the patient whose ID is the same as the one received as a request parameter when the component is mounted
  useEffect(() => {
    api.get(`/patients/${patientID}`).then((response) => {
      console.log(response.data.patient);
      setPatient(response.data.patient);
    });
  }, []);

  // Get the notifications of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/notifications`).then((response) => {
      // console.log(response.data.monitorings);
      setPatientNotifications(response.data.notifications);
    });
  }, [patient]);

  // Get the exams of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/exams`).then((response) => {
      // console.log(response.data.exams);
      setPatientExams(response.data.exams);
    });
  }, [patient]);

  // Get the observations of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/observations`).then((response) => {
      // console.log(response.data.monitorings);
      setPatientObservations(response.data.observations);
    });
  }, [patient]);

  // Get the treatments of the patient whose ID is the same as the one received as a request parameter
  useEffect(() => {
    api.get(`/patients/${patientID}/treatments`).then((response) => {
      // console.log(response.data.treatments);
      setPatientTreatments(response.data.treatments);
    });
  }, [patient]);

  function showExams() {
    setDisplayExams(true);
    setDisplayNotifications(false);
    setDisplayObservations(false);
    setDisplayTreatments(false);
  }

  function showNotifications() {
    setDisplayExams(false);
    setDisplayNotifications(true);
    setDisplayObservations(false);
    setDisplayTreatments(false);
  }

  function showObservations() {
    setDisplayExams(false);
    setDisplayNotifications(false);
    setDisplayObservations(true);
    setDisplayTreatments(false);
  }

  function showTreatments() {
    setDisplayExams(false);
    setDisplayNotifications(false);
    setDisplayObservations(false);
    setDisplayTreatments(true);
  }

  function handleClick(type) {
    type === 'treatment'
      ? showTreatments()
      : type === 'notification'
      ? showNotifications()
      : type === 'observation'
      ? showObservations()
      : showExams();
  }

  return (
    <div>
      {patient && (
        <>
          <PatientSelected patient={patient} />
          <MonitoringOptions isCreation={false} click={handleClick} />
          {displayNotifications && (
            <NotificationsList notifications={patientNotifications} />
          )}
          {displayExams && <ExamsList exams={patientExams} />}
          {displayTreatments && (
            <TreatmentsList treatments={patientTreatments} />
          )}
          {displayObservations && (
            <ObservationsList observations={patientObservations} />
          )}
        </>
      )}
    </div>
  );
}
