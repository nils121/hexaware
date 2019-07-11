
import { createStore } from 'redux';
import empReducer from './empReducer';

const store = createStore(empReducer);

export default store;