import React from 'react';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import ReactDOM from 'react-dom';

import Button from '../../../Common/Buttons/Button/Button';

import style from './ConfirmationModal.module.css';

function ConfirmationModal({ open, message, cancel, confirm }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.modalBox}>
        <p className={style.messageContainer}>{message}</p>
        <div className={style.buttonsContainer}>
          <Button class="danger" size="medium" click={cancel}>
            <XCircle />
            Não, cancelar
          </Button>
          <Button class="success" size="medium" click={confirm}>
            <CheckCircle />
            Sim, confirmar
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('confirmationPortal')
  );
}

export default ConfirmationModal;
