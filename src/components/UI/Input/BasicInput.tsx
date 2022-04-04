/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';

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
) => (
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
    />
  </FormControl>
);

export default BasicInput;
