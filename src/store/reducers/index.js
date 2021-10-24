import { combineReducers } from 'redux';

import { characterReducer } from './character';
import { enemyReducer } from './enemy';
import { gameReducer } from './game';
import { lifeReducer } from './life';
import { scoreReducer } from './score';



const rootReducer = combineReducers({
  characterReducer,
  enemyReducer,
  gameReducer,
  lifeReducer,
  scoreReducer
})

export default rootReducer;