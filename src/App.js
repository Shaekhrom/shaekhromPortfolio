import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/abtMe/AbtMe.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Contacts from './components/contact/Contact.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      activeDiv: 'div1', // Inicialmente, se asume que el primer div está visible
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const divsToObserve = ['div1', 'div2', 'div3', 'div4'];

    // Encuentra el div actualmente visible
    let currentDiv = 'div1';
    let maxPercentage = 0;

    for (const divId of divsToObserve) {
      const divElement = document.getElementById(divId);
      const rect = divElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const top = Math.max(rect.top, 0);
      const bottom = Math.min(rect.bottom, viewportHeight);
      const percentage = (bottom - top) / viewportHeight;

      if (percentage > maxPercentage) {
        maxPercentage = percentage;
        currentDiv = divId;
      }
    }

    // Actualiza el estado para resaltar el elemento de la barra de navegación correspondiente
    this.setState({ activeDiv: currentDiv });
  };

  scrollToDiv = (divId) => {
    if (divId === 'div1') {
      // Si es el contenedor 'About Me', hacer scroll al inicio de la página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si es cualquier otro contenedor, hacer scroll al div correspondiente
      const divElement = document.getElementById(divId);
      if (divElement) {
        divElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className={`navBarDiv ${this.state.activeDiv === 'div1' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div1')}
          >
            <p className="navText">About Me</p>
          </div>

          <div
            className={`navBarDiv ${this.state.activeDiv === 'div2' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div2')}
          >
            <p className="navText">Skills</p>
          </div>

          <div
            className={`navBarDiv ${this.state.activeDiv === 'div3' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div3')}
          >
            <p className="navText">Projects</p>
          </div>

          <div
            className={`navBarDiv ${this.state.activeDiv === 'div4' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div4')}
          >
            <p className="navText">Contact</p>
          </div>
        </header>

        <div className="body" ref={this.myRef}>
          <div id="div1">
            <AboutMe />
          </div>
          <div className="blackContainer" id="div2">
            <Skills />
          </div>
          <div id="div3">
            <Projects />
          </div>
          <div className="blackContainer" id="div4">
            <Contacts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
