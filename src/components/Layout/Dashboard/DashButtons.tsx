import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import api from '../../../services/fetchAPI/init';

export interface DashButtonsProps {
  id: string
  pinned: boolean
}

const DashButtons = ({ pinned, id }: DashButtonsProps) => {
  const handleDeleteProduct = async () => {
    await api.delete(`products/${id}`);
  };

  if (pinned) {
    return (
      <>
        {/* {isLoading && <ModalLoader isOpen={isOpen} onClose={onClose} />} */}

        <ButtonGroup
          w="100%"
          justifyContent="center"
        >
          <Button
            fontSize="18px"
            variant="link"
            w="20%"
            size="xs"
            onClick={(() => {
              console.log('des');
            })}
          >
            Desfixar
          </Button>
        </ButtonGroup>
      </>
    );
  }

  return (
    <>
      {/* {isLoading && <ModalLoader isOpen={isOpen} onClose={onClose} />} */}
      <ButtonGroup
        w="100%"
        justifyContent="center"
        // flexDirection="column"
        alignItems="center"
      >
        <Button
          fontSize="18px"
          variant="link"
          w="100%"
          size="xs"
          color="green"
          onClick={(() => {
            console.log('fix');
          })}
          disabled={pinned}
        >
          Fixar
        </Button>
        <Button
          fontSize="18px"
          variant="link"
          w="100%"
          size="xs"
          color="orange"
          style={{
            margin: '0px !important',
          }}
          onClick={() => console.log('edit')}
        >
          Editar
        </Button>
        <Button
          fontSize="18px"
          variant="link"
          w="100%"
          size="xs"
          color="red"
          style={{
            margin: '0px !important',
          }}
          onClick={() => handleDeleteProduct()}
        >
          Deletar
        </Button>
      </ButtonGroup>
    </>
  );
};

export default DashButtons;
