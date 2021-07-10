import React from 'react';
import Loader from 'react-loader-spinner';

import style from './LoadingAnimation.module.css';

export default function LoadingAnimation() {
  return (
    <div className={style.flexContainer}>
      <Loader type="TailSpin" color="#4873c4" height={50} width={50} />
    </div>
  );
}
