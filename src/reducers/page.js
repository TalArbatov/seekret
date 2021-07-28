import { CHANGE_PAGE } from '../actions/action-types';
import PAGES from '../constants/pages';

const defaultState = {
  page: PAGES.FIRST_PAGE
};

const pageReducer = (state = defaultState, action) => {
  switch(action.type) {
    
    // TODO: validate deep nesting (via lodash get or .?)
    case CHANGE_PAGE:
      return {
        ...state,
        page: action?.payload?.page
      }
    default:
      return state;
  }
};

export default pageReducer;
