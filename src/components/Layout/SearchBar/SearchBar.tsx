import React, { useContext, useState, FormEvent } from 'react';
import {
  Button, Flex, IconButton, Input,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../../../services/fetchAPI/init';
import ProductContext from '../../../context/products/ProductContext';
import { ProductModel } from '../../../../backend/data/model/ProductModel';

const SearchBar = (): JSX.Element => {
  const [searchName, setSearchName] = useState<string>('');

  const productsCtx = useContext(ProductContext);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (searchName !== '') {
      const response = await api.getWithBody('/products/find', {
        name: searchName,
      });
      productsCtx.handleFindProductsByName(response.data.content as ProductModel | ProductModel[]);
    }
  };

  const handleClearFindList = () => {
    productsCtx.handleClearFindByNameList();
  };

  return (
    <form style={{ width: '50%', padding: '1em' }} onSubmit={(e) => handleSubmit(e)}>
      <Flex w="100%">
        <Input
          fontSize="1.2em"
          h="50px"
          variant="outline"
          placeholder="Exmeplo: Chá verde"
          borderColor="#5b7300"
          _hover={{
            borderColor: '#6b5f00',
          }}
          bg="#fff"
          type="search"
          borderRadius="5px 0px 0px 5px"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <IconButton
          bg="#789341"
          color="#fff"
          aria-label="Call Sage"
          borderRadius="0px 5px 5px 0px"
          fontSize="30px"
          h="50px"
          w="50px"
          _hover={{
            bg: '#789341',
            opacity: '0.8',
          }}
          icon={<AiOutlineSearch />}
          type="submit"
        />
        <Button
          bg="#789341"
          color="#fff"
          ml="1em"
          h="50px"
          _hover={{
            bg: '#789341',
            opacity: '0.8',
          }}
          onClick={handleClearFindList}
        >
          Limpar pesquisa
        </Button>
      </Flex>
    </form>
  );
};

export default SearchBar;
