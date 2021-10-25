import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Character from './components/Character';
import Controls from './components/Controls';
import Enemy from './components/Enemies';

import Hud from '../Hud';
import Scenario from '../Scenario';

import { addEnemy } from '../../store/actions/enemy';

const Game = (props) => {

  const { storeEnemy, storeScore, addEnemy, storeGame } = props;

  const [enemyCounter, setEnemyCounter] = useState(0);

  let enemyList = storeEnemy.enemies;
  
  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const randomTime = Math.random() * 4000;
    const enemyTimer = setTimeout(() => {
      const maxEnemiesScreen = Math.floor(storeScore.score/20);
      if ( enemyList.length <= maxEnemiesScreen ) {
        setEnemyCounter(enemyCounter + 1);
        addEnemy(
          enemyCounter,
          getRandomIntInclusive(0,2)
        );
      }
    }, randomTime);
    return () => clearInterval(enemyTimer);
  })

  const renderEnemy = (enemy) => {
    return (
      <Enemy 
        key={`${enemy.type}-${enemy.id}`}
        enemyId={enemy.id}
        enemyType={enemy.type}
      />
    )
  };

  return (
    <>
      <Scenario />
      <Character />
      {storeGame.game === 'start' &&
        <>
          <Hud />
          <Controls />
          {enemyList.map((enemy) => (renderEnemy(enemy)))}
        </>
      }
    </>
  )
};

const mapStateToProps = (state) => ({
  storeEnemy: state.enemyReducer,
  storeScore: state.scoreReducer,
  storeGame: state.gameReducer,
});

export default connect(
  mapStateToProps,
  { addEnemy }
)(Game);