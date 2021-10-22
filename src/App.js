import Game from './components/Game';
import { Header } from './components/Header';
import GlobalStyle from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Game />
    </div>
  );
}

export default App;
