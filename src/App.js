import './App.css';
import AboutMe from './components/abtMe/AbtMe.jsx'
import Skills from './components/skills/Skills.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navBarDiv">
          <p className="navText">About Me</p>
        </div>
        <div className="navBarDiv">
          <p className="navText">Skills</p>
        </div>     
        <div className="navBarDiv">
          <p className="navText">Projects</p>
        </div>    
        <div className="navBarDiv">
          <p className="navText">Contact</p> 
        </div>                             
      </header>

      <body>
        <div>
          <AboutMe/>
        </div>
        <div className='blackContainer'>
          <Skills/>
        </div>
        <div>

        </div>
        <div>

        </div>
      </body>
    </div>
  );
}

export default App;
