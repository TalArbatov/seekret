import { CHANGE_PAGE } from './action-types';

export const changePage = (page, postSubscription = false) => {
  return {
    type: CHANGE_PAGE,
    payload: {
      page,
      postSubscription
    }
  };
};
