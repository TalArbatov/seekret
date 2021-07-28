import { createStore, combineReducers } from 'redux'
import pageReducer from './reducers/page';
import subscriptionReducer from './reducers/subscription';

const configStore = () => createStore(
  combineReducers({
    page: pageReducer,
    subscription: subscriptionReducer
  })
);

export default configStore;
