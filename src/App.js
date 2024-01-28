import './App.css';
import AboutMe from './components/abtMe/AbtMe.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contacts from './components/contact/Contact.jsx'

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

      <body className='body'>
        <div>
          <AboutMe/>
        </div>
        <div className='blackContainer'>
          <Skills/>
        </div>
        <div>
          <Projects/>
        </div>
        <div className='blackContainer'>
          <Contacts/>
        </div>
      </body>
    </div>
  );
}

export default App;
