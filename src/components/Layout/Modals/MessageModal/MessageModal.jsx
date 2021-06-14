import React from 'react';
import ReactDOM from 'react-dom';

import style from './MessageModal.module.css';

function MessageModal({ open, header, body, closeModal }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.modalBox}>
        <p className={style.header}>{header}</p>
        <p className={style.header}>{body}</p>
        <div className={style.buttons}>
          <button className={style.button} onClick={closeModal}>
            Sim
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('messagePortal')
  );
}

export default MessageModal;
