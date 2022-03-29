import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import SideContent from './SideContent';

const SideMenu = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Flex w="full" display={{ base: 'flex', xl: 'none' }} justifyContent="flex-end" alignItems="center">
      <IconButton
        ref={btnRef}
        display={{ base: 'flex', xl: 'none' }}
        aria-label="Open menu"
        fontSize="20px"
        color="blackAlpha.800"
        variant="ghost"
        icon={<AiOutlineMenu />}
        onClick={onOpen}
        cursor="pointer"
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SideContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default SideMenu;
