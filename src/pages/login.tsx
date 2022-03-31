import React, {
  FormEvent, useState,
} from 'react';
// import { useRouter } from 'next/router';
import {
  Button, ButtonGroup, chakra, Flex, Grid, useToast,
} from '@chakra-ui/react';
// import { GetServerSideProps } from 'next';
// import { parseCookies } from 'nookies';
import { NextPage } from 'next';
// import Head from 'next/head';
import BasicInput from '../components/UI/Input/BasicInput';
import Form from '../components/Layout/Form/Form';
import { validateEmail, validationField } from '../utils/validations';
import toastConfig from '../utils/config/toastConfig';
// import ModalLoader from '../components/Loader/ModalLoader';
// import { AuthContext } from '../context/AuthContext';
import FormHeader from '../components/Layout/Form/FormHeader';
import SEO from '../components/SEO';

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const { signIn } = useContext(AuthContext);

  // const { push } = useRouter();
  const toast = useToast();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    // eslint-disable-next-line no-console
    console.log(isLoading);
    if (validationField(email) || validationField(password)) {
      toast({
        title: '🤨',
        description: 'Todos os campos devem ser preenchidos.',
        status: 'error',
        ...toastConfig,
      });
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: '🤨',
        description: 'E-mail inválido.',
        status: 'error',
        ...toastConfig,
      });
      setIsLoading(false);
      return;
    }

    // const data = {
    //   email, password,
    // };

    // const result = await signIn(data);
    setIsLoading(false);
    // if (!result) {
    //   toast({
    //     title: '😔',
    //     description: 'Não foi possível fazer login. Verifique se e-mail ou senha estão errados',
    //     status: 'error',
    //     ...toastConfig,
    //   });
    // } else {
    //   toast({
    //     title: '👏',
    //     description: 'Login efetuado com sucesso!',
    //     status: 'success',
    //     ...toastConfig,
    //   });
    //   push('/dashboard', '/dashboard');
    // }
  };

  return (
    <>
      {/* {isLoading && <ModalLoader isOpen={isLoading} />}
      <SEO title="p.$_ | Login de usuário" description="User login page" /> */}
      <SEO title="Login | Atelier do Chá" description="User login page" />
      <Flex
        flexDir="column"
        alignItems="center"
      >
        <FormHeader />
        <Form handleSubmit={handleSubmit}>
          <chakra.h1 w="full" textAlign="center" fontSize="48px">Entrar</chakra.h1>
          <Grid
            w="80%"
            templateRows="repeat(3, 1fr)"
            alignItems="center"
            gap={6}
          >
            <BasicInput id="email" label="E-mail" placeholder="example@example.com" onChangehandle={setEmail} />
            <BasicInput id="password" label="Senha" placeholder="************" type="password" onChangehandle={setPassword} />
            <ButtonGroup
              flexDir="column"
              py="1em"
            >
              <Button
                color="#fff"
                fontSize="24px"
                border="none"
                bg="#6b5f00"
                w="100%"
                h="60px"
                _hover={{
                  bg: '#5b7300',
                }}
                type="submit"
              >
                Entrar
              </Button>
            </ButtonGroup>
          </Grid>
        </Form>
      </Flex>
    </>
  );
};

export default Login;
