import React from 'react';
import ReactDOM from 'react-dom';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

import Button from '../../../Common/Buttons/Button/Button';

import style from './CancelationModal.module.css';

function CancelationModal({ open, message, cancel, confirm }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.modalBox}>
        <p className={style.messageContainer}>{message}</p>
        <div className={style.buttonsContainer}>
          <Button class="success" size="medium" click={cancel}>
            <XCircle />
            Não, continuar na página
          </Button>
          <Button class="danger" size="medium" click={confirm}>
            <CheckCircle />
            Sim, desejo cancelar
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('cancelationPortal')
  );
}

export default CancelationModal;
