# Jungle Game Infite Runner in ReactJS
## Digital Innovation One: Bootcamp Impulso React Web Developer
### Projeto: Recriando o famoso jogo do dinossauro sem internet

Projeto desenvolvido com instruções de [Celso Henrique](https://www.linkedin.com/in/devfrontend/) na trilha de estudo do Bootcamp Impulso React Web Developer da [Digital Innovation One](https://digitalinnovation.one/).

Link da base utilizada neste projeto: [celso-henrique/dio-dino-game](https://github.com/celso-henrique/dio-dino-game).

O objetivo deste projeto foi ir além da interação de HTML, CSS e Javascript nativo/puro, para isso o projeto foi montado do zero em **React** com **Redux**, criando um desafio que proporcionou melhor entendimento sobre hooks, store, renderização condicional, styled-components e como juntar as peças para desenvolver o game.

Neste projeto os destaques são:
* Construção do zero iniciando com o `npx create-react-app`;
* O projeto com organizado em *containers* e respectivos *components* conforme segue:
  * Raiz (importados diretamente no App):
    * `Header` para cabeçalho na tela;
    * `GlobalStyles` para estilo global do projeto;
    * `Info` painel modal com informações gerais do projeto;
  * `Game` que engloba:
    * `Character` para o herói com programação de pulo;
    * `Controls` para informar os comandos para pular (tecla espaço ou toque);
    * `Enemies` para inimigos com três tipos diferentes (goblin, mushroom e skeleton);
    * `Notice`;
  * `Hud` (Heads-Up Display) que engloba:
    * `Life` para controlar e mostrar os pontos de vida;
    * `Record`;
    * `Score` para controlar e mostrar os pontos;
  * `Scenario` que engloba:
    * `BackgroundParalax` com fundo de 4 camadas em efeito paralax;
    * `Ground` com imagem para o "chão" do cenário.
* Para o comando do personagem foram definidos os eventos `keyup` e `touchend`, assim para acionar o pulo basta apertar (e soltar) a barra de espaço ou, para dispositivos com touchscreen, tocar (e soltar) a tela;
* Com Redux foram criada store permitindo compartilhar e manipular diversos estados em toda a aplicação com os redurcers:
  * `characterReducer`, `enemyReducer`, `gameReducer`,  `lifeReducer`, `scoreReducer`.
* Foi adicionado um pequeno controle de nível de dificuldade com limite de inimigos na tela (`maxEnemiesScreen` no componente `Game`);
* Os estilos foram configurados para responsividade, utilizando unidades como `em` para tamanhos de fontes e `vh` e `vw` para dimensões de camadas, além de `@media` queries.

```
TODO:(
  * Componente Modal com informações do game;
  * Configurar os botão Info;
  * Configurar o Record.

)
```

&nbsp;

Link do projeto para acessar online: https://jungle-infinite-runner.netlify.app <br/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/9b3537f4-890c-41ab-9c91-44ae3e1ff0d1/deploy-status)](https://app.netlify.com/sites/jungle-infinite-runner/deploys)<br/>
*Como é uma hospedagem gratuita, tenha paciência caso demore para carregar*

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
* [itch.io](https://itch.io/):
  * [Jungle Pack](https://jesse-m.itch.io/jungle-pack);
  * [Monsters Creatures Fantasy](https://luizmelo.itch.io/monsters-creatures-fantasy).