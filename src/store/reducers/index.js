import { combineReducers } from 'redux';
import { enemyReducer } from './enemy';
import { scoreReducer } from './score';

const rootReducer = combineReducers({
  enemyReducer,
  scoreReducer
})

export default rootReducer;