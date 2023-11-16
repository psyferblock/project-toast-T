import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastArray,handleDismiss,...others}) {
  const toastRef=React.useRef()

  return (
    <ol className={styles.wrapper}>
      {toastArray.map((toast)=>(
      <li className={styles.toastWrapper} id={toast.id}>
        <Toast ref={toastRef} message={toast.message} variant={toast.variant} id={toast.id}  />
      </li>

      ))}
      {/* <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  );
}

export default ToastShelf;
