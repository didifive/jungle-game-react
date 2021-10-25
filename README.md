# Jungle Game Infite Runner in React
## Digital Innovation One: Bootcamp Impulso React Web Developer
### Projeto: Recriando o famoso jogo do dinossauro sem internet

Projeto desenvolvido com instruções de [Celso Henrique](https://www.linkedin.com/in/devfrontend/) na trilha de estudo do Bootcamp Impulso React Web Developer da [Digital Innovation One](https://digitalinnovation.one/).

Link da base utilizada neste projeto: [celso-henrique/dio-dino-game](https://github.com/celso-henrique/dio-dino-game).

O objetivo deste projeto foi ir além da interação de HTML, CSS e Javascript nativo/puro, para isso o projeto foi montado do zero em **React** com **Redux**, criando um desafio que proporcionou melhor entendimento sobre hooks, store, renderização, styled-components, além de como juntar as peças para desenvolver o game.

Neste projeto os destaques são:
* Construção do zero iniciando com o `npx create-react-app`;
* O projeto foi organizado em *containers* e respectivos *components* conforme segue:
  * Raiz (importados diretamente no App):
    * `GlobalStyles` em styled-componentpara estilo global do projeto;
    * `Modal` em styled-component utilizado em `Info` e `GameOver`;
    * `Notice` em styled-component utilizado em `Controls`;
  * `Game` que engloba:
    * `Character` para o herói com programação de pulo;
    * `Controls` para informar ao jogador os comandos disponíveis;
    * `Enemies` para inimigos com três tipos diferentes (goblin, mushroom e skeleton);
    * `Header` para cabeçalho na tela;
    * `Info` painel modal com Informações Gerais ou Game Over (conforme estado do game);
  * `Hud` (Heads-Up Display) que engloba:
    * `Life` para controlar e mostrar os pontos de vida;
    * `Record` que mostra a pontuação mais alta obtida antes do Game Over;
    * `Score` para controlar e mostrar os pontos;
  * `Scenario` que engloba:
    * `BackgroundParalax` com fundo de 4 camadas em efeito paralax;
    * `Ground` com imagem para o "chão" do cenário.
* Para o comando do personagem foram definidos os eventos `keyup` e `touchend`, assim para acionar o pulo basta apertar (e soltar) a barra de espaço ou, para dispositivos com touchscreen, tocar (e soltar) a tela;
* Com Redux foi criada store permitindo compartilhar e manipular diversos estados em toda a aplicação com os redurcers:
  * `characterReducer`, `enemyReducer`, `gameReducer`,  `lifeReducer`, `scoreReducer`;
  * E actions que permitem controlar os estados de character, enemy, game, life e score;
  * Criadas actions de reset para que o jogador possa reiniciar o jogo após o "Game Over" e ter registrado o maior score em `Record`;
* Configuradas renderizações condicionais em vários componentes para mostrar, ou não, o componente conforme o estado do game;
* Criada também renderização com método `.map()` permitindo renderizar inimigos diversos aleatoriamente e simultaneamente;  
* Foi adicionado controle de nível de dificuldade com limite de inimigos na tela (`maxEnemiesScreen` no componente `Game`);
* Os estilos foram configurados para responsividade, utilizando unidades como `em` para tamanhos de fontes e `vh` e `vw` para dimensões de camadas, além de `@media` queries.

```
TODO:(
  * Adicionar Sons;
)
```

&nbsp;

Link do projeto para acessar online: https://jungle-infinite-runner.netlify.app <br/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/9b3537f4-890c-41ab-9c91-44ae3e1ff0d1/deploy-status)](https://app.netlify.com/sites/jungle-infinite-runner/deploys)

&nbsp;

Para rodar o projeto localmente:
* Na pasta do projeto executar o comando `npm install` para que o npm carregue os módulos;
* Após concluído, basta executar o comando `yarn start` e conferir ele funcionando, normalmente em `http://localhost:3000/`.

&nbsp;

*Sinopse do Game:*<br/>
*Josué, pescador, estava na calmaria da pescaria, até que de tão calmo caiu no sono. De repente ele acorda e se vê sozinho no meio de uma floresta, então ele escuta um lobo uivar e uma coruja chirriar e, assustado, sem arma e sozinho, começa a correr mesmo sem saber que rumo tomar ou que perigos vai encontrar...*

&nbsp;

Desenvolvido com:
* [Visual Studio Code](https://code.visualstudio.com/) 1.61.2;
* [NodeJS](https://nodejs.org/en/) 14.18.1 LTS;
* [React](https://reactjs.org/) 17.0.2;
* [styled-components](https://styled-components.com/);
* [Google Fonts](https://fonts.google.com/);
* [Font Awesome](https://fontawesome.com/);
* [ICONS8](https://icons8.com/);
* [GIFMaker](https://www.gifmaker.me/);
* [Favicon.io](https://favicon.io/);
* [itch.io](https://itch.io/):
  * [Jungle Pack](https://jesse-m.itch.io/jungle-pack);
  * [Monsters Creatures Fantasy](https://luizmelo.itch.io/monsters-creatures-fantasy);
* [freesound](https://freesound.org/);
  * [hop4.wav](https://freesound.org/people/szegvari/sounds/578056/);
  * [Forest jungle nature dark Atmo](https://freesound.org/people/felixyadomi/sounds/456371/);
  * [Robotic Voice 'Now You Are Dead'](https://freesound.org/people/MuzoTV/sounds/384903/).