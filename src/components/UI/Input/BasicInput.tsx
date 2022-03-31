/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';

import {
  useColorModeValue,
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
  onChangehandle: React.SetStateAction<any>
}

const BasicInput = (
  {
    id, label, placeholder, onChangehandle, value, type,
  }: BasicFormControlProps,
) => (
  <FormControl
    id={id}
    isRequired
    w="100%"
    padding="1rem"
  >
    <FormLabel>{label}</FormLabel>
    <Input
      isRequired
      marginBottom="0.5rem"
      variant="outline"
      placeholder={placeholder}
      borderColor={useColorModeValue('yellow.700', 'gray.600')}
      bg="#fff"
      onChange={((e) => onChangehandle(e.target.value))}
      value={value}
      type={type !== undefined ? 'text' : type}
    />
  </FormControl>
);

export default BasicInput;
