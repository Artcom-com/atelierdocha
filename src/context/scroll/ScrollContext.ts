/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { RefObject, createContext } from 'react';

export type RefFunction = () => void;
export interface ScrollContextProps {
  handleScrollToHome: RefFunction
  handleScrollToAbout: RefFunction
  handleScrollToProducts: RefFunction
  handleScrollToContact: RefFunction
}

export interface ScrollContextPropsType extends ScrollContextProps {
  handleUpdateScrollToHome(scrollFunction: RefFunction): void
  handleUpdateScrollToAbout(scrollFunction: RefFunction): void
  handleUpdateScrollToProducts(scrollFunction: RefFunction): void
  handleUpdateScrollToContact(scrollFunction: RefFunction): void
}

export default createContext<ScrollContextPropsType>({
  handleScrollToHome: () => {
    console.log('ref');
  },
  handleScrollToAbout: () => {
    console.log('ref');
  },
  handleScrollToProducts: () => {
    console.log('ref');
  },
  handleScrollToContact: () => {
    console.log('ref');
  },

  handleUpdateScrollToHome: (scrollFunction: RefFunction) => {
    console.log('');
  },
  handleUpdateScrollToAbout: (scrollFunction: RefFunction) => {
    console.log('');
  },
  handleUpdateScrollToProducts: (scrollFunction: RefFunction) => {
    console.log('');
  },
  handleUpdateScrollToContact: (scrollFunction: RefFunction) => {
    console.log('');
  },
});
