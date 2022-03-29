import React from 'react';
import classes from './FontBorder.module.css';

export interface FontBorderText {
  content: string
}

const FontBorder = ({ content }: FontBorderText): JSX.Element => (
  <span className={classes['font-border']}>
    {content}
  </span>
);

export default FontBorder;
