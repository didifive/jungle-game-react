import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Hook que centraliza as ações do game loop
 * Gerencia colisões, inimigos, pontuação e outros eventos do jogo
 */
export const useGameLogic = () => {
  const dispatch = useDispatch();
  const gameState = useSelector(state => state.gameReducer.game);
  const characterPosition = useSelector(state => state.characterReducer.position);
  const enemies = useSelector(state => state.enemyReducer.enemies);
  const life = useSelector(state => state.lifeReducer.life);

  /**
   * Executa a lógica de atualização do jogo a cada frame
   */
  const updateGameLogic = useCallback((frameCount, deltaTime) => {
    if (gameState !== 'start') return;

    // Aqui você pode adicionar lógica que precisa rodar sincronizada:
    // - Verificar colisões
    // - Atualizar posições globais
    // - Sincronizar estado do jogo
    // Por enquanto é apenas um placeholder para estrutura

  }, [gameState, characterPosition, enemies, life, dispatch]);

  return { updateGameLogic };
};
