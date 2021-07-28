import { CHANGE_PAGE } from './action-types';

export const changePage = (page, postSubscription = false) => {
  console.log(postSubscription)
  return {
    type: CHANGE_PAGE,
    payload: {
      page,
      postSubscription
    }
  };
};
