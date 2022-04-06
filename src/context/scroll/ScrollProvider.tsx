/* eslint-disable no-console */
import React, { useMemo, useReducer } from 'react';
import ScrollContext, { RefFunction, ScrollContextPropsType } from './ScrollContext';
import scrollReducer from './scrollReducer';

export interface ScrollProviderProps {
  children: JSX.Element | JSX.Element[]
}

const ScrollProvider = ({ children }: ScrollProviderProps): JSX.Element => {
  const [scrollState, dispatchScrollActions] = useReducer(scrollReducer, {
    handleScrollToHome: () => {
      console.log('');
    },
    handleScrollToAbout: () => {
      console.log('');
    },
    handleScrollToProducts: () => {
      console.log('');
    },
    handleScrollToContact: () => {
      console.log('');
    },
  });

  const handleUpdateScrollToHome = (scrollFunction: RefFunction): void => {
    dispatchScrollActions({
      type: 'ADD_SCROLL_HOME',
      handleScrollToHome: scrollFunction,
    });
  };

  const handleUpdateScrollToAbout = (scrollFunction: RefFunction): void => {
    dispatchScrollActions({
      type: 'ADD_SCROLL_ABOUT',
      handleScrollToAbout: scrollFunction,
    });
  };

  const handleUpdateScrollToProducts = (scrollFunction: RefFunction): void => {
    dispatchScrollActions({
      type: 'ADD_SCROLL_PRODUCTS',
      handleScrollToProducts: scrollFunction,
    });
  };

  const handleUpdateScrollToContact = (scrollFunction: RefFunction): void => {
    dispatchScrollActions({
      type: 'ADD_SCROLL_CONTACT',
      handleScrollToContact: scrollFunction,
    });
  };

  const context: ScrollContextPropsType = useMemo(() => ({
    handleScrollToHome: scrollState.handleScrollToHome,
    handleScrollToAbout: scrollState.handleScrollToAbout,
    handleScrollToProducts: scrollState.handleScrollToProducts,
    handleScrollToContact: scrollState.handleScrollToContact,
    handleUpdateScrollToHome,
    handleUpdateScrollToAbout,
    handleUpdateScrollToProducts,
    handleUpdateScrollToContact,
  }), [scrollState]);

  return (
    <ScrollContext.Provider value={context}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
