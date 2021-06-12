import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

import Button from '../../../components/Common/Button/Button';
import PatientSelected from '../../Patients/PatientSelected/PatientSelected';
import NotificationOptions from '../NotificationOptions/NotificationOptions';

// import style from './NotificationPageForSelectedPatient.module.css';

function NotificationPageForSelectedPatient() {
  const location = useLocation();
  const { state } = location;

  console.log(state);

  return (
    <div>
      <PatientSelected />
      <NotificationOptions patient={state} />
    </div>
  );
}

export default NotificationPageForSelectedPatient;
