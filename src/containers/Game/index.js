import { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';

import Character from './components/Character';
import Controls from './components/Controls';
import Enemy from './components/Enemies';
import Header from './components/Header';
import Info from './components/Info';

import Hud from '../Hud';
import Scenario from '../Scenario';

import { addEnemy } from '../../store/actions/enemy';

const Game = (props) => {

  const { storeEnemy, storeScore, addEnemy, storeGame } = props;

  const enemyList = useMemo(() => storeEnemy.enemies,[storeEnemy.enemies]);
  const gameState = useMemo(() => storeGame.game,[storeGame.game]);
  const score = useMemo(() => storeScore.score,[storeScore.score]);

  const [enemyCounter, setEnemyCounter] = useState(0);

  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  const getRandomIntInclusive = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const randomTime = Math.random() * 4000;
    const enemyTimer = setTimeout(() => {
      const maxEnemiesScreen = Math.floor(score/25);
      if ( enemyList.length <= maxEnemiesScreen ) {
        setEnemyCounter(enemyCounter + 1);
        addEnemy(
          enemyCounter,
          getRandomIntInclusive(0,2)
        );
      }
    }, randomTime);
    return () => clearInterval(enemyTimer);
  },[addEnemy, enemyCounter, enemyList.length, score])

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
      <Header />
      <Scenario 
        gameState = {gameState}
      />
      <Character 
        gameState = {gameState}
      />
      <Controls 
        gameState = {gameState}
      />
      {gameState === 'start' &&
        <>
          <Hud />
          {enemyList.map((enemy) => (renderEnemy(enemy)))}
        </>
      }
      {(gameState === 'stop' || gameState === 'over') &&
        <Info />
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