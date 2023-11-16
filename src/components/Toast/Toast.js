import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};
function Toast({message,variant,toastRef,handleDismiss,id}) {


  const toastClass= ICONS_BY_VARIANT[variant]
  const FeatherTag =  toastClass

 
  return (
    <div ref={toastRef} className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}>
        <FeatherTag size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton} onClick={handleDismiss(id)}>
        <X size={24}  />
        <VisuallyHidden >Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default React.forwardRef(Toast);
