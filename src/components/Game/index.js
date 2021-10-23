import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Scenario from '../Scenario';
import Character from '../Character';
import Enemy from '../Enemies';
import Score from '../Score';
import Controls from '../Controls';

import { addEnemy } from '../../store/actions/enemy';

const Game = (props) => {

  const { storeEnemy, storeScore, addEnemy } = props;
  
  const [enemyCounter, setEnemyCounter] = useState(0);

  let enemyList = storeEnemy.enemies;
  
  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const randomTime = (Math.random() * 6000);
    const enemyTimer = setInterval(() => {
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
      <Score />
      <Controls />
      <Character />
      {enemyList.map((enemy) => (renderEnemy(enemy)))}
    </>
  )
};

const mapStateToProps = (state) => ({
  storeEnemy: state.enemyReducer,
  storeScore: state.scoreReducer
});

export default connect(
  mapStateToProps,
  { addEnemy }
)(Game);