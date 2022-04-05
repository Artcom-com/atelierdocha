/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useRef } from 'react';

import {
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export interface BasicFormControlProps {
  id: string
  label: string
  placeholder: string
  value?: string
  type?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangehandle: React.SetStateAction<any>
  step?: string
}

const BasicInput = (
  {
    id, label, placeholder, onChangehandle, value, type, step,
  }: BasicFormControlProps,
) => {
  const quantityInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    quantityInputRef.current && quantityInputRef.current.addEventListener('wheel', (e) => {
      e.preventDefault();
    });
  }, [quantityInputRef]);

  return (
    <FormControl
      id={id}
      isRequired
      w="100%"
    >
      <FormLabel
        fontSize="1.5em"
      >
        {label}
      </FormLabel>
      <Input
        isRequired
        fontSize="1.2em"
        h="70px"
        variant="outline"
        placeholder={placeholder}
        borderColor="#5b7300"
        _hover={{
          borderColor: '#6b5f00',
        }}
        bg="#fff"
        onChange={((e) => onChangehandle(e.target.value))}
        value={value}
        type={type === undefined ? 'text' : type}
        step={step === undefined ? '' : step}
        ref={quantityInputRef}
      />
    </FormControl>
  );
};

export default BasicInput;
