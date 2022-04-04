import React, {
  FormEvent, useState, ChangeEvent,
} from 'react';
// import { useRouter } from 'next/router';
import {
  Button, ButtonGroup, chakra, Flex, FormLabel, Grid, Input, useColorModeValue, useToast, Image,
} from '@chakra-ui/react';
// import { GetServerSideProps } from 'next';
// import { parseCookies } from 'nookies';
import { NextPage } from 'next';
// import Head from 'next/head';
import BasicInput from '../../components/UI/Input/BasicInput';
import Form from '../../components/Layout/Form/Form';
import { validationField } from '../../utils/validations';
import toastConfig from '../../utils/config/toastConfig';
// import ModalLoader from '../components/Loader/ModalLoader';
// import { AuthContext } from '../context/AuthContext';
import SEO from '../../components/SEO';
import api from '../../services/fetchAPI/init';

const Login: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>('');

  // const { push } = useRouter();
  const toast = useToast();

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);
    setImage(selectedImages[0]);

    setPreviewImage(URL.createObjectURL(selectedImages[0]));
    // eslint-disable-next-line no-param-reassign
    event.target.value = '';
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    // eslint-disable-next-line no-console
    console.log(isLoading);
    if (validationField(name) || validationField(price)) {
      toast({
        title: '🤨',
        description: 'Todos os campos devem ser preenchidos.',
        status: 'error',
        ...toastConfig,
      });
      setIsLoading(false);
      return;
    }

    if (image === undefined) {
      toast({
        title: '🤨',
        description: 'Imagem inválida.',
        status: 'error',
        ...toastConfig,
      });
      setIsLoading(false);
      return;
    }

    const data = new FormData();

    data.append('name', name);
    data.append('price', price);
    data.append('productImg', image);

    api.setContentType('multipart/form-data');
    const result = await api.post('products', data);
    setIsLoading(false);
    if (result.data.error) {
      toast({
        title: '😔',
        description: result.data.error,
        status: 'error',
        ...toastConfig,
      });
    } else {
      toast({
        title: '👏',
        description: result.data.message,
        status: 'success',
        ...toastConfig,
      });
      // push('/dashboard', '/dashboard');
    }
  };

  return (
    <>
      {/* {isLoading && <ModalLoader isOpen={isLoading} />} */}
      <SEO title="Adicionar produto | Atelier do Chá" description="User login page" />
      <Flex
        flexDir="column"
        alignItems="center"
        py="5em"
      >
        <Form handleSubmit={handleSubmit}>
          <chakra.h1 w="full" textAlign="center" fontSize={{ base: '40px', md: '48px' }} py={{ base: '0.5em', md: '0' }}>Adicionar produto</chakra.h1>
          <Grid
            w="80%"
            templateRows="repeat(2, 1fr)"
            alignItems="center"
            gap={6}
          >
            <BasicInput
              id="name"
              label="Nome do produto"
              placeholder="Filtro especial - 100und"
              onChangehandle={setName}
            />
            <BasicInput
              id="price"
              label="Valor R$"
              placeholder="10,00"
              type="number"
              step="any"
              onChangehandle={setPrice}
            />
            <Flex
              justifyContent="center"
            >
              {previewImage && (
              <Image
                height="350px"
                width="350px"
                src={previewImage}
                alt="Imagens seleionadas"
                boxSizing="border-box"
                padding="5px"
                borderRadius="15px"
                cursor="pointer"
              />
              )}
            </Flex>
            <FormLabel
              htmlFor="images"
              border="dashed"
              borderWidth="2px"
              borderRadius="15px"
              height="50px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{
                borderColor: useColorModeValue('yellow.700', 'gray.600'),
              }}
            >
              Enivar Fotos
              <Input
                accept=".jpg, .png, .jpeg"
                display="none"
                id="images"
                name="images"
                type="file"
                onChange={(e) => handleSelectImages(e)}
                disabled={isLoading}
              />
            </FormLabel>
            <ButtonGroup
              flexDir="column"
              py="1em"
              gap={4}
            >
              <Button
                color="#fff"
                fontSize="24px"
                border="none"
                bg="#6b5f00"
                w="100%"
                h="60px"
                _hover={{
                  bg: '#C0B90E',
                }}
                type="submit"
              >
                Cadastrar produto
              </Button>
              <Button
                color="#fff"
                fontSize="24px"
                border="none"
                bg="#5b7300"
                w="100%"
                h="60px"
                _hover={{
                  bg: '#C0B90E',
                }}
                margin="0 !important"
              >
                Voltar
              </Button>
            </ButtonGroup>
          </Grid>
        </Form>
      </Flex>
    </>
  );
};

export default Login;
