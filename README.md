# Jungle Game Infite Runner in ReactJS
## Digital Innovation One: Bootcamp Impulso React Web Developer
### Projeto: Recriando o famoso jogo do dinossauro sem internet

Projeto desenvolvido com instruções de [Celso Henrique](https://www.linkedin.com/in/devfrontend/) na trilha de estudo do Bootcamp Impulso React Web Developer da [Digital Innovation One](https://digitalinnovation.one/).

Link da base utilizada neste projeto: [celso-henrique/dio-dino-game](https://github.com/celso-henrique/dio-dino-game).

O objetivo deste projeto foi ir além da interação de HTML, CSS e Javascript nativo, para isso o projeto foi montado do zero em **ReactJS** com **Redux**, criando um desafio que permite entender melhor o desenvolvimento utilizando as bibliotecas.

Neste projeto os destaques são:
* Construção do zero iniciando com o `npx create-react-app`;
* Foram criados os componentes:
  * `BackgroundParalax` com fundo de 4 camadas em efeito paralax;
  * `Ground` com imagem para o "chão" do cenário;
  * `Scenario` que engloba `BackgroundParalax` e `Ground` para montagem do cenário;
  * `Character` para o herói com programação de pulo;
  * `Enemies` para inimigos com três tipos diferentes (goblin, mushroom e skeleton);
  * `Score` para controlar e mostrar os pontos;
  * `Constrols` para informar os comandos para pular (tecla espaço ou toque);
  * `Game` que engloba `Scenario`, `Character`, `Enemies` e `Score` para montagem do game;
  * `Header` para cabeçalho na tela;
  * `Modal` ;
  * `GlobalStyles` para estilo global do projeto.
* Para o comando do personagem foram definidos os eventos `keyup` e `touchend`, assim para acionar o pulo basta apertar (e soltar) a barra de espaço ou, para dispositivos com touchscreen, tocar (e soltar) a tela.
* Com Redux foram criadas stores permitindo compartilhar e manipular diversos estados em toda a aplicação com:
  * Actions: `CHAR_POSITION`, `ADD_ENEMY`, `DEFEAT_ENEMY`, `GAME_START`, `GAME_OVER`, `GAME_PAUSE` e `ADD_SCORE`;
  * Reducers: `characterReducer`, `enemyReducer`, `gameReducer`, `scoreReducer`.
* Foi adicionado nível de dificuldade controlando o limite de inimigos na tela (`maxEnemiesScreen` no componente `Game`);
* Os estilos foram configurados para responsividade, utilizando unidades como `em` para tamanhos de fontes e `vh` e `vw` para dimensões de camadas, além de `@media` queries.

```
TODO:(
  * Componente Modal com informações do game;
  * Componente Lifes para contador de vidas;
  * Componente Hud para englobar o Score e Lifes;
  * Configurar store e componentes para os estados do game: Play, Pause e GameOver;
  * Configurar os botões Play, Pause e Info
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
* [styled-components](https://styled-components.com/);
* [Google Fonts](https://fonts.google.com/);
* [Font Awesome](https://fontawesome.com/);
* [ICONS8](https://icons8.com/).

Pack de imagens encontradas no portal [itch.io](https://itch.io/):
* [Jungle Pack](https://jesse-m.itch.io/jungle-pack)
* [Monsters Creatures Fantasy](https://luizmelo.itch.io/monsters-creatures-fantasy)