import { useEffect, useRef } from 'react';

/**
 * Hook que fornece um game loop centralizado (heartbeat) para o jogo
 * Executa a cada frame em sincronização com o refresh da tela (requestAnimationFrame)
 * 
 * @param {Function} onUpdate - Função chamada a cada frame do game loop
 * @param {boolean} isActive - Se o game loop está ativo ou não
 * @param {number} targetFps - FPS alvo (padrão: 60)
 */
export const useGameLoop = (onUpdate, isActive = true, targetFps = 60) => {
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const animationFrameRef = useRef(null);
  const deltaTimeRef = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    const frameInterval = 1000 / targetFps;

    const gameLoopTick = () => {
      const now = Date.now();
      deltaTimeRef.current = now - lastTimeRef.current;

      // Executa apenas se passou tempo suficiente para o FPS alvo
      if (deltaTimeRef.current >= frameInterval) {
        frameCountRef.current += 1;
        onUpdate(frameCountRef.current, deltaTimeRef.current);
        lastTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(gameLoopTick);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoopTick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, onUpdate, targetFps]);

  return {
    frameCount: frameCountRef.current,
    deltaTime: deltaTimeRef.current
  };
};
