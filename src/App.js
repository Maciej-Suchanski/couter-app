import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className='App-title'>Couter App in ReactJS</h1>
      </header>
      <Counter initValue={0}/>
      <Counter initValue={100}/>
    </div>
  );
}

export default App;
