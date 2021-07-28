import { 
  ADD_SUBSCRIPTION, 
  REMOVE_SUBSCRIPTION, 
  UPDATE_SUBSCRIPTIONS
} from './action-types';

// DEPRECATED
export const addSubscription = subscription => ({
  type: ADD_SUBSCRIPTION,
  payload: {
    subscription
  }
})
// DEPRECATED
export const removeSubscription = subscription => ({
  type: REMOVE_SUBSCRIPTION,
  payload: {
    subscription
  }
});

export const updateSubscriptions = subscriptions => ({
  type: UPDATE_SUBSCRIPTIONS,
  payload: {
    subscriptions
  }
});