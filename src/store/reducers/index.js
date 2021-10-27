import { combineReducers } from 'redux';

import { characterReducer } from './character';
import { enemyReducer } from './enemy';
import { gameReducer } from './game';
import { lifeReducer } from './life';
import { scoreReducer } from './score';
import { soundsReducer } from './sounds';



const rootReducer = combineReducers({
  characterReducer,
  enemyReducer,
  gameReducer,
  lifeReducer,
  scoreReducer,
  soundsReducer
})

export default rootReducer;