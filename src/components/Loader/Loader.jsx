import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <Oval
        height={80}
        width={80}
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;