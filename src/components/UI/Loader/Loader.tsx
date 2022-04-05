import React from 'react';
import classes from './Loader.module.css';

const Loader = (): JSX.Element => (
  <div className={classes['lds-facebook']}>
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
