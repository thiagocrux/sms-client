import React from 'react';

import style from './ErrorMessage.module.css';

function ErrorMessage({ children }) {
  return <div className={style.errorMessage}>{children}</div>;
}

export default ErrorMessage;
