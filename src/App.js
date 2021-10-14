import logo from './logo.svg';
import './App.css';
import { Background } from './components/BackgroundParalax';
import { GroundImage } from './components/Ground';

function App() {
  return (
    <div className="App">
      <Background />
      <GroundImage />
    </div>
  );
}

export default App;
