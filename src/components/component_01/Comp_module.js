import React from 'react';
import styles from './Comp_module.module.css';

/**
 * import css module
 */

const CssComponent = () => {
  return (
    <div className={styles.CssModuleComponent}>
      <div className={styles.header}>
        Import CSS Module
      </div>
      <div className={styles.content}>
        <li>css-module</li>
      </div>
    </div>
  );
}

export default CssComponent;