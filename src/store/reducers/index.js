import { combineReducers } from 'redux';
import { enemyReducer } from './enemy';
import { scoreReducer } from './score';

const rootReducer = combineReducers({
  enemy: enemyReducer,
  score: scoreReducer
})

export default rootReducer;