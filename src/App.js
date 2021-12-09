import './App.css';
import FirstComponent from './First.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FirstComponent my_param="a message"/>
      </header>
    </div>
  );
}

export default App;
