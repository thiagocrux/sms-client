import React from 'react';
import ReactDOM from 'react-dom';

import style from './ConfirmationModal.module.css';

function ConfirmationModal({ open, message, cancel, confirm }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.modalBox}>
        <p className={style.header}>{message}</p>
        <div className={style.buttons}>
          <button className={style.button} onClick={cancel}>
            Não
          </button>
          <button className={style.button} onClick={confirm}>
            Sim
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('confirmationPortal')
  );
}

export default ConfirmationModal;
