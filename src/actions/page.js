import { CHANGE_PAGE } from './action-types';

export const changePage = page => {
  return {
    type: CHANGE_PAGE,
    payload: {
      page
    }
  };
};
