import { Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';
import api from '../../../services/fetchAPI/init';
import toastConfig from '../../../utils/config/toastConfig';

export interface DashButtonsProps {
  id: string
  pinned: boolean
}

const DashButtons = ({ pinned, id }: DashButtonsProps) => {
  const productCtx = useContext(ProductContext);
  const { push, reload } = useRouter();
  const toast = useToast();

  const handleDeleteProduct = async () => {
    productCtx.handleDeleteProduct(id);
    await api.delete(`products/${id}`);
  };

  const handleFixProduct = async () => {
    await api.post(`products/pin/${id}`, {
      pinned: !pinned,
    });
    toast({
      title: '😊',
      description: pinned ? 'Desfixado com sucesso!' : 'Fixadao com sucesso!',
      status: 'success',
      ...toastConfig,
    });
    productCtx.handlePinProduct(id);
    // setTimeout(() => reload(), 1000);
  };

  const handleEdit = () => {
    push('/products/[id]', `/products/${id}`);
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
            variant="outline"
            w="80%"
            h="50px"
            color="#fff"
            _hover={{
              bg: 'orange',
            }}
            onClick={() => handleFixProduct()}
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
          variant="outline"
          w="80%"
          h="50px"
          color="#fff"
          _hover={{
            bg: 'green',
          }}
          onClick={() => handleFixProduct()}
          disabled={pinned}
        >
          Fixar
        </Button>
        <Button
          fontSize="18px"
          variant="outline"
          w="80%"
          h="50px"
          color="#fff"
          _hover={{
            bg: 'orange',
          }}
          style={{
            margin: '0px !important',
          }}
          onClick={() => handleEdit()}
        >
          Editar
        </Button>
        <Button
          fontSize="18px"
          variant="outline"
          w="80%"
          h="50px"
          // size="lg"
          color="#fff"
          _hover={{
            bg: 'red',
          }}
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
