# Jungle Game Infite Runner in ReactJS
## Digital Innovation One: Bootcamp Impulso React Web Developer
### Projeto: Recriando o famoso jogo do dinossauro sem internet

Projeto desenvolvido com instruções de [Celso Henrique](https://www.linkedin.com/in/devfrontend/) na trilha de estudo do Bootcamp Impulso React Web Developer da [Digital Innovation One](https://digitalinnovation.one/).

Link da base utilizada neste projeto: [celso-henrique/dio-dino-game](https://github.com/celso-henrique/dio-dino-game).

O objetivo deste projeto foi ir além da interação de HTML, CSS e Javascript, para isso o projeto foi montado do zero em **ReactJS**

Neste projeto foram realizadas modificações e aprimoramentos, as alterações mais importantes foram:
* O projeto foi construído com **ReactJS** e **Redux**;
* Foram criados os componentes:
  * `BackgroundParalax` com fundo de 4 camadas em efeito paralax;
  * `Ground` com imagem para o "chão" do cenário;
  * `Scenario` que engloba `BackgroundParalax` e `Ground` para montagem do cenário;
  * `Character` para o herói;
  * `Enemies` para inimigos;
  * `Score` para marcar os pontos;
  * `Game` que engloba `Scenario`, `Character`, `Enemies` e `Score` para montagem do game;
  * `Header` para cabeçalho na tela;
  * `GlobalStyles` para estilo global do projeto (fonte, fundo etc).

```
TODO:(
  * Programar Score;
  * Componente Modal com informações do game;
  * Programar os eventos (pulo, inimigo, gameover);
  * Programar aumento dificuldade de acordo com score;
  * Redux utilizado para controlar os estados do game: Load, Play e GameOver.
)
```

&nbsp;

Link do projeto para acessar online: https://xxxxx <br/>
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
* [Visual Studio Code](https://code.visualstudio.com/) 1.61.0;
* [NodeJS](https://nodejs.org/en/) 14.18.1 LTS;
* [styled-components](https://styled-components.com/);
* [Google Fonts](https://fonts.google.com/);
* [Font Awesome](https://fontawesome.com/).


Pack de imagens encontradas no portal [itch.io](https://itch.io/):
* [Jungle Pack](https://jesse-m.itch.io/jungle-pack)
* [Monsters Creatures Fantasy](https://luizmelo.itch.io/monsters-creatures-fantasy)
