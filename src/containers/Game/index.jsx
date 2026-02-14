import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
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

  const enemyCounterRef = useRef(0);
  const [triggerSpawn, setTriggerSpawn] = useState(0);
  const scoreRef = useRef(score);

  // Atualiza scoreRef quando score muda
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  const getRandomIntInclusive = useCallback((min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  // Reset do contador quando o jogo reinicia
  useEffect(() => {
    if (enemyList.length === 0) {
      enemyCounterRef.current = 0;
    }
  }, [enemyList.length]);

  useEffect(() => {
    // Não cria inimigos quando o jogo não está rodando
    if (gameState !== 'start') return;

    // Dificuldade progressiva
    const difficulty = Math.min(Math.floor(scoreRef.current / 50), 6);
    
    // Randomiza entre spawn próximo (um pulo) ou distante (pousar e pular)
    const isCloseSpawn = Math.random() > 0.4; // 60% chance de spawn próximo
    
    let randomTime;
    if (isCloseSpawn) {
      // Spawn próximo: 600-1000ms (distância de um pulo - mais próximos)
      const minClose = Math.max(550, 900 - (difficulty * 60));
      const maxClose = Math.max(750, 1100 - (difficulty * 60));
      randomTime = minClose + Math.random() * (maxClose - minClose);
    } else {
      // Spawn distante: 1500-2500ms (precisa pousar e pular novamente)
      const minFar = Math.max(1200, 1800 - (difficulty * 100));
      const maxFar = Math.max(1800, 2800 - (difficulty * 150));
      randomTime = minFar + Math.random() * (maxFar - minFar);
    }
    
    const enemyTimer = setTimeout(() => {
      // Mais inimigos conforme score aumenta
      const maxEnemiesScreen = Math.max(1, Math.floor(scoreRef.current/20));
      
      if ( enemyList.length < maxEnemiesScreen ) {
        const newEnemyId = enemyCounterRef.current;
        enemyCounterRef.current += 1;
        addEnemy(
          newEnemyId,
          getRandomIntInclusive(0,2)
        );
      }
      // Força o useEffect a rodar novamente
      setTriggerSpawn(prev => prev + 1);
    }, randomTime);
    return () => clearTimeout(enemyTimer);
  },[enemyList.length, gameState, triggerSpawn, getRandomIntInclusive, addEnemy])
  // Removido 'score' e 'addEnemy' das dependências para evitar cancelamento do timeout

  const renderEnemy = useCallback((enemy) => {
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
  }, [characterCurrentPosition, gameState, life, recordLocalStorage, recordStore, score, soundEffects]);

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
      {enemyList.map((enemy) => (renderEnemy(enemy)))}
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
