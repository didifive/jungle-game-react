import { Scenario } from '../Scenario';
import { Character } from '../Character';
import { Enemy } from '../Enemies';
import { Score } from '../Score';

export const Game = () => {
  return (
    <>
      <Scenario />
      <Score />
      <Character />
      <Enemy />
    </>
  )
};