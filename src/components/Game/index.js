import { useEffect, useState } from 'react'
import { Scenario } from '../Scenario';
import { Character } from '../Character';
import Enemy from '../Enemies';
import { Score } from '../Score';

export const Game = () => {
  
  const [enemyCounter, setEnemyCounter] = useState(0);
  
  const [score, setScore] = useState(0);

  const [listEnemies, setListEnemies] = useState([]);

  useEffect(() => {
    const randomTime = Math.random() * 6500;
    const enemyTimer = setInterval(() => {
      setEnemyCounter(enemyCounter + 1);
      listEnemies.push({
        id: enemyCounter,
        type: "goblin"
      });
      setScore(score + 5);
    }, randomTime);
    return () => clearInterval(enemyTimer);
  })
  
  /*list.splice(list.indexOf('foo'), 1);*/

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