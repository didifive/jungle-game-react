import { useEffect, useState } from 'react'
import { Scenario } from '../Scenario';
import { Character } from '../Character';
import { Enemy } from '../Enemies';
import { Score } from '../Score';

export const Game = () => {
  
  const [enemyCounter, setEnemyCounter] = useState(0);

  
  return (
    <>
      <Scenario />
      <Score 
        score="0"
      />
      <Character />
      <Enemy 
        enemyId={enemyCounter}
        score="1"
      />
    </>
  )
};