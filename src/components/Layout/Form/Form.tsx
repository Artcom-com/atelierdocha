import React, { FormEvent } from 'react';
// import Head from 'next/head';
import classes from './Form.module.css';

export interface FormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (e: FormEvent) => Promise<void>
  children: React.ReactNode
}

const Form = ({ handleSubmit, children }: FormProps): JSX.Element => (
  <form className={classes.form} onSubmit={handleSubmit}>
    {children}
  </form>
);

export default Form;
