<div align="center">

# Jungle Infinite Runner

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-State%20Management-764ABC?logo=redux)](https://redux.js.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.6-646CFF?logo=vite)](https://vitejs.dev/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9b3537f4-890c-41ab-9c91-44ae3e1ff0d1/deploy-status)](https://app.netlify.com/projects/jungle-infinite-runner/deploys)

**A modern infinite runner game built with React, Redux, and Vite**

[Live Demo](https://jungle-ir.zancanela.dev.br) · [Report Bug](https://github.com/didifive/jungle-game-react/issues) · [Request Feature](https://github.com/didifive/jungle-game-react/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Game Story](#-game-story)
- [Development](#-development)
- [Credits](#-credits)
- [License](#-license)

---

## 🎮 About

Jungle Infinite Runner is a modern browser-based infinite runner game developed as part of the **Digital Innovation One Bootcamp - Impulso React Web Developer**, under the guidance of [Celso Henrique](https://www.linkedin.com/in/devfrontend/). 

This project evolved from a Chrome's dinosaur game recreation ([original project](https://github.com/celso-henrique/dio-dino-game)) into a fully-featured game with modern React architecture, state management, and responsive design.

The main goal was to migrate from vanilla JavaScript to a comprehensive React application using **Vite**, **Redux**, and **styled-components**, demonstrating advanced concepts such as hooks, global state management, conditional rendering, and game loop implementation.

---

## ✨ Features

- ⚡ **Modern Build Tool**: Built with Vite for fast development and optimized production builds
- 🎯 **State Management**: Redux-powered centralized state management
- 🎨 **Styled Components**: Dynamic styling with styled-components
- 📱 **Responsive Design**: Fully responsive with support for desktop and mobile devices
- 🎮 **Multiple Input Methods**: Keyboard (spacebar) and touchscreen support
- 🎵 **Sound System**: Background music and sound effects with toggle controls
- 💾 **Persistent High Scores**: LocalStorage integration for record tracking
- 🌍 **Parallax Background**: Multi-layer parallax effect for immersive experience
- 👾 **Multiple Enemy Types**: Three different enemy types (Goblin, Mushroom, Skeleton)
- ❤️ **Life System**: Health point management with visual feedback
- 📊 **Score System**: Real-time score tracking with high score records
- 🔄 **Dynamic Difficulty**: Adaptive difficulty based on enemy count

---

## 🛠 Technologies

### Core Technologies
- **[React](https://reactjs.org/)** (v19.2.4) - UI library
- **[Redux](https://redux.js.org/)** - State management
- **[Vite](https://vitejs.dev/)** (v5.4.6) - Build tool and development server
- **[styled-components](https://styled-components.com/)** - CSS-in-JS styling

### Additional Libraries
- **[react-player](https://www.npmjs.com/package/react-player)** - Audio player component
- **[react-device-detect](https://www.npmjs.com/package/react-device-detect)** - Device detection

### Design Resources
- **[Google Fonts](https://fonts.google.com/)** - Typography
- **[Font Awesome](https://fontawesome.com/)** - Icons
- **[ICONS8](https://icons8.com/)** - Additional icons

### Assets
- **Graphics**: [Jungle Pack](https://jesse-m.itch.io/jungle-pack) and [Monsters Creatures Fantasy](https://luizmelo.itch.io/monsters-creatures-fantasy) from itch.io
- **Sound Effects**: Audio assets from [freesound.org](https://freesound.org/)

---

## 🏗 Architecture

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── GlobalStyles/   # Global styling
│   ├── Modal/          # Modal component
│   └── Notice/         # Notice component
├── containers/         # Container components
│   ├── App/           # Root application container
│   ├── Game/          # Game container and logic
│   ├── Hud/           # Heads-Up Display
│   └── Scenario/      # Game scenario and background
├── hooks/             # Custom React hooks
│   ├── useGameLogic.jsx
│   └── useGameLoop.jsx
└── store/             # Redux store
    ├── actions/       # Action creators
    └── reducers/      # State reducers
```

### Component Breakdown

#### Root Components
- **GlobalStyles**: Global CSS styles using styled-components
- **Modal**: Reusable modal component for Info and Game Over screens
- **Notice**: Information notices for game controls

#### Game Container
- **Character**: Player character with jump mechanics
- **Controls**: Display available game commands
- **Enemies**: Enemy management with three enemy types
- **Header**: Game header display
- **Info**: Modal panel for game information and Game Over state

#### HUD (Heads-Up Display)
- **Life**: Health point display and management
- **Record**: High score display
- **Score**: Current score tracking and display

#### Scenario
- **BackgroundParalax**: 4-layer parallax background effect
- **Ground**: Ground layer for the game scenario

### State Management

Redux store with the following reducers:

- **characterReducer**: Character state and jump mechanics
- **enemyReducer**: Enemy spawning and movement
- **gameReducer**: Overall game state (running, paused, game over)
- **lifeReducer**: Player health management
- **scoreReducer**: Score tracking and high score management
- **soundsReducer**: Audio settings and controls

### Key Features Implementation

- **Event Handlers**: `keyup` and `touchend` events for cross-device compatibility
- **Conditional Rendering**: Dynamic component rendering based on game state
- **Dynamic Rendering**: `.map()` method for multiple simultaneous enemy rendering
- **Responsive Design**: Viewport-based units (`vh`, `vw`, `em`) and media queries
- **LocalStorage**: Persistent high score storage
- **Reset Actions**: Game state reset functionality for replay capability

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 14.18.1 LTS or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/didifive/jungle-game-react.git
   cd jungle-game-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 📖 Game Story

> *Josué, a humble fisherman, was peacefully fishing when the calmness lulled him to sleep. Suddenly, he awakens to find himself alone in the middle of a dense jungle. As a wolf howls and an owl hoots in the distance, fear grips him. Unarmed and alone, he begins to run without knowing which direction to take or what dangers lie ahead...*

Will you help Josué survive the jungle?

---

## 💻 Development

### Development Setup

This project was developed with:
- **IDE**: Visual Studio Code 1.61.2
- **Node.js**: 14.18.1 LTS
- **Build Tool**: Vite 5.4.6

### Migration from Create React App

This project was successfully migrated from Create React App (deprecated) to Vite, resulting in:
- Faster development server startup
- Near-instant hot module replacement (HMR)
- Optimized production builds
- Better developer experience

---

## 🙏 Credits

### Original Project
Based on [dio-dino-game](https://github.com/celso-henrique/dio-dino-game) by [Celso Henrique](https://www.linkedin.com/in/devfrontend/)

### Bootcamp
Developed as part of the **Impulso React Web Developer Bootcamp** by [Digital Innovation One](https://digitalinnovation.one/)

### Graphics & Assets
- [Jungle Pack](https://jesse-m.itch.io/jungle-pack) by Jesse M. (itch.io)
- [Monsters Creatures Fantasy](https://luizmelo.itch.io/monsters-creatures-fantasy) by Luiz Melo (itch.io)

### Sound Effects
All sound effects from [freesound.org](https://freesound.org/):
- [Jump/Hop Sound](https://freesound.org/people/felixyadomi/sounds/456373/) by felixyadomi
- [Forest Jungle Dark Atmosphere](https://freesound.org/people/felixyadomi/sounds/456371/) by felixyadomi
- [Robotic Voice 'Now You Are Dead'](https://freesound.org/people/MuzoTV/sounds/384903/) by MuzoTV
- [Damage Hit Voice](https://freesound.org/people/dersuperanton/sounds/437651/) by dersuperanton

### Tools & Services
- [Favicon.io](https://favicon.io/) - Favicon generation
- [GIFMaker](https://www.gifmaker.me/) - GIF creation
- [Shields.io](https://shields.io/) - Badge generation
- [Netlify](https://www.netlify.com/) - Hosting and deployment

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Luis Carlos Zancanela](https://www.linkedin.com/in/luis-carlos-zancanela/)**

[![GitHub](https://img.shields.io/badge/GitHub-didifive-181717?logo=github)](https://github.com/didifive)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://www.linkedin.com/in/luis-carlos-zancanela/)

</div>
