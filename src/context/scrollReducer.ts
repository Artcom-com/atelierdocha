/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { RefFunction } from './ScrollContext';

export interface ScrollState {
  handleScrollToHome: RefFunction
  handleScrollToAbout: RefFunction
  handleScrollToProducts: RefFunction
  handleScrollToContact: RefFunction
}

export interface ScrollActions {
  type: 'ADD_SCROLL_HOME' | 'ADD_SCROLL_ABOUT' | 'ADD_SCROLL_PRODUCTS' | 'ADD_SCROLL_CONTACT'
  handleScrollToHome?: RefFunction
  handleScrollToAbout?: RefFunction
  handleScrollToProducts?: RefFunction
  handleScrollToContact?: RefFunction
}

const scrollReducer = (state: ScrollState, actions: ScrollActions): ScrollState => {
  if (actions.type === 'ADD_SCROLL_HOME') {
    return {
      handleScrollToHome: actions.handleScrollToHome as RefFunction,
      handleScrollToAbout: state.handleScrollToAbout,
      handleScrollToProducts: state.handleScrollToProducts,
      handleScrollToContact: state.handleScrollToContact,
    };
  }

  if (actions.type === 'ADD_SCROLL_ABOUT') {
    return {
      handleScrollToHome: state.handleScrollToHome,
      handleScrollToAbout: actions.handleScrollToAbout as RefFunction,
      handleScrollToProducts: state.handleScrollToProducts,
      handleScrollToContact: state.handleScrollToContact,
    };
  }

  if (actions.type === 'ADD_SCROLL_PRODUCTS') {
    return {
      handleScrollToHome: state.handleScrollToHome,
      handleScrollToAbout: state.handleScrollToAbout,
      handleScrollToProducts: actions.handleScrollToProducts as RefFunction,
      handleScrollToContact: state.handleScrollToContact,
    };
  }

  if (actions.type === 'ADD_SCROLL_CONTACT') {
    return {
      handleScrollToHome: state.handleScrollToHome,
      handleScrollToAbout: state.handleScrollToAbout,
      handleScrollToProducts: state.handleScrollToProducts,
      handleScrollToContact: actions.handleScrollToContact as RefFunction,
    };
  }

  return {
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
  };
};

export default scrollReducer;
