import './App.css';
import  Nav  from 'react-bootstrap/Nav';
import { Route } from 'react-router-dom';

import  AboutMe  from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Nav variant='pills' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>About Me</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/skills'>Skills</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/resume'>Resume</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/projects'>Project Showcase</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/contact'>Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>

      <Route path='/home' exact component={AboutMe} />
      <Route path='/skills' exact component={Skills} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contact' exact component={Contact} />
    </div>
  );
}

export default App;
