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

  const { addEnemy, storeCharacter, storeEnemy, storeGame, storeLife, storeScore, storeSounds } = props;

  const bgm = useMemo(() => storeSounds.bgm,[storeSounds.bgm]);
  const characterCurrentPosition = useMemo(() => storeCharacter.position,[storeCharacter.position]);
  const enemyList = useMemo(() => storeEnemy.enemies,[storeEnemy.enemies]);
  const gameState = useMemo(() => storeGame.game,[storeGame.game]);
  const life = useMemo(() => storeLife.life,[storeLife.life]);
  const recordLocalStorage = localStorage.getItem('record');
  const recordStore = useMemo(() => storeScore.record, [storeScore.record]);
  const score = useMemo(() => storeScore.score,[storeScore.score]);
  const soundEffects = useMemo(() => storeSounds.soundEffects,[storeSounds.soundEffects]);                   

  const [enemyCounter, setEnemyCounter] = useState(0);

  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  const getRandomIntInclusive = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    // Não cria inimigos quando o jogo não está rodando
    if (gameState !== 'start') return;

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
    return () => clearTimeout(enemyTimer);
  },[addEnemy, enemyCounter, enemyList.length, score, gameState])

  const renderEnemy = (enemy) => {
    return (
      <Enemy 
        key={`${enemy.type}-${enemy.id}`}
        characterCurrentPosition = {characterCurrentPosition}
        enemyId={enemy.id}
        enemyType={enemy.type}
        gameState={gameState}
        life = {life}
        record = {recordLocalStorage > recordStore ? recordLocalStorage : recordStore}
        score = {score}
        soundEffects = {soundEffects}
      />
    )
  };

  return (
    <>
      <Header 
        gameState = {gameState}
        bgm = {bgm}
        soundEffects = {soundEffects}
      />
      <Scenario 
        gameState = {gameState}
        bgm = {bgm}
      />
      <Character 
        characterCurrentPosition = {characterCurrentPosition}
        gameState = {gameState}
        soundEffects = {soundEffects}
      />
      <Controls 
        gameState = {gameState}
      />
      <Hud
        gameState = {gameState}
        life = {life}
        record = {recordLocalStorage > recordStore ? recordLocalStorage : recordStore}
        score = {score}
      />
      {gameState === 'start' &&
        <>
          {enemyList.map((enemy) => (renderEnemy(enemy)))}
        </>
      }
      {(gameState === 'stop' || gameState === 'over') &&
        <Info 
          gameState = {gameState}
          record = {recordLocalStorage > recordStore ? recordLocalStorage : recordStore}
          score = {score}
        />
      }
    </>
  )
};

const mapStateToProps = (state) => ({
  storeCharacter: state.characterReducer,
  storeGame: state.gameReducer,
  storeEnemy: state.enemyReducer,
  storeLife: state.lifeReducer,
  storeScore: state.scoreReducer,
  storeSounds: state.soundsReducer
});

export default connect(
  mapStateToProps,
  { addEnemy }
)(Game);
