/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Flex, Modal, ModalOverlay } from '@chakra-ui/react';
import Loader from './Loader';

export interface ModalLoaderProps {
  isOpen: boolean
  // eslint-disable-next-line react/require-default-props
  onClose?: () => void
}

const ModalLoader = ({ isOpen, onClose }: ModalLoaderProps): JSX.Element => (
  <Modal
    isOpen={isOpen}
    onClose={onClose || (() => {})}
  >
    <ModalOverlay>
      <Flex
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Loader />
      </Flex>
    </ModalOverlay>
  </Modal>
);

export default ModalLoader;
