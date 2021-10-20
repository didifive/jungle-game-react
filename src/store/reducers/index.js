import { combineReducers } from 'redux';
import { enemyReducer } from './enemy';
import { scoreReducer } from './store';

const rootReducer = combineReducers({
  enemy: enemyReducer,
  score: scoreReducer
})

export default rootReducer;