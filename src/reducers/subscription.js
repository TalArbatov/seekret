import { ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, UPDATE_SUBSCRIPTIONS } from '../actions/action-types';


const defaultState = {
  subscriptions: ['hello', 'world', 'bunch of chips', 'testststest', 'test', 'tetst', 'tststst', 'testststest', 'test', 'tetst', 'last', 'afterlast'],
  options: ['option', 'cat', 'dog', 'newnewnewoption']
};

const subscriptionReducer = (state = defaultState, action) => {
  switch(action.type) {
    
    // TODO: check for duplicates
    // DEPRECATED
    case ADD_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [action.payload.subscription, ...state.subscriptions]
      };
    // DEPRECATED
    case REMOVE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: state.subscriptions.filter(sub => sub !== action.payload.subscription)
      };
    case UPDATE_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: action.payload.subscriptions
      }
    default:
      return state;
  }
};

export default subscriptionReducer;
