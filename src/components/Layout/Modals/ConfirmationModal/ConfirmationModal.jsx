import React from 'react';
import ReactDOM from 'react-dom';

import style from './ConfirmationModal.module.css';

function ConfirmationModal({ open, handleCancel, handleConfirm }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.modalBox}>
        <p className={style.header}>Confirmar Novo Exame?</p>
        <div className={style.buttons}>
          <button className={style.button} onClick={handleCancel}>
            Não
          </button>
          <button className={style.button} onClick={handleConfirm}>
            Sim
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('confirmationPortal')
  );
}

export default ConfirmationModal;
