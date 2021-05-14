import React from 'react';

import Tabs from '../../components/Notifications/Tabs/Tabs';
import SearchForm from '../../components/Patients/SearchForm/SearchForm';

import style from './Notification.module.css';

export default function Notification() {
  /* TODO:
    1. Search for patient
    2. Shows the list of patients found based on query where the user will have to click one to select it
    4. If the patient is found, show a section with the info of the selected patient
  */

  function getPatientSearchParameter(event) {
    console.log(event.target.value);
  }

  return (
    <div className={style.notification}>
      <SearchForm />
      <Tabs />
    </div>
  );
}
