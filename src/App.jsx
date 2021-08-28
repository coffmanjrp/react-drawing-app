import './App.scss';

function App() {
  return (
    <div className="App">
      <canvas width={800} height={800} />
      <div class="toolbox">
        <button>-</button>
        <span>10</span>
        <button>+</button>
        <input type="color" />
        <button>X</button>
      </div>
    </div>
  );
}

export default App;
