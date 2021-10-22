import { combineReducers } from 'redux';

import { characterReducer } from './character';
import { enemyReducer } from './enemy';
import { gameReducer } from './game';
import { scoreReducer } from './score';



const rootReducer = combineReducers({
  characterReducer,
  enemyReducer,
  gameReducer,
  scoreReducer
})

export default rootReducer;