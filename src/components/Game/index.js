import { useEffect, useState } from 'react'
import { Scenario } from '../Scenario';
import { Character } from '../Character';
import Enemy from '../Enemies';
import { Score } from '../Score';

export const Game = () => {
  
  const [enemyCounter, setEnemyCounter] = useState(0);
  
  const [score, setScore] = useState(0);

  const [listEnemies, setListEnemies] = useState([]);
  
  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  
  
  useEffect(() => {
    const randomTime = Math.random() * 6500;
    const enemyTimer = setInterval(() => {
      setEnemyCounter(enemyCounter + 1);
      setListEnemies(listEnemies => [...listEnemies, {
        id: enemyCounter,
        type: getRandomIntInclusive(0,2)
      }]);
      setScore(score + 5);
    }, randomTime);
    return () => clearInterval(enemyTimer);
  })
  
  /*updateList(list.slice(list.indexOf(e.target.name, 1)))*/

  useEffect(() => {
    const scoreTimer = setInterval(() => {
      setScore(score + 1);
    }, 1000);
    return () => clearInterval(scoreTimer);
  })
  
  const renderEnemy = (score, enemy) => {
    return (
      <Enemy 
        key={`${enemy.type}-${enemy.id}`}
        enemyId={enemy.id}
        score={score}
        enemyType={enemy.type}
      />
    )
  };
  
  return (
    <>
      <Scenario />
      <Score 
        score={score}
      />
      <Character />
      {listEnemies.map((enemy) => (
        renderEnemy(score, enemy)
      ))};
    </>
  )
};