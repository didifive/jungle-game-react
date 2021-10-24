import { Header } from './components/Header';
import GlobalStyle from './components/GlobalStyles';

import Game from './containers/Game';

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
