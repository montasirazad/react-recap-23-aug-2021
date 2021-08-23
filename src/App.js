import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React recap</h1>

        <Component name='android' />
        <Component name='ios' />
        <Component name='windows' />
        <Component name='linux' />
        <Component name='Oxygen' />
        <Component name='Color OS' />
        
            
        
        


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


  );

  function Component(props) {
    return (
      <div style={{border:'6px solid rgba(97, 243, 226, 1)',margin:'10px',padding:'5px',borderRadius:'5px',backgroundColor:'rgba(255, 132, 0, 1)'}}>
        <h1>oS : {props.name}</h1>
        <p>Making components for practice.</p>
      </div>
    )

  }
}

export default App;
