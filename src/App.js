import './App.css';
import  Nav  from 'react-bootstrap/Nav';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';

import  AboutMe  from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';

function App() {

  const history = useHistory();

  return (
   <>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="/home" onClick={() => history.push('/home')}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => history.push('/skills')} eventKey="/skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => history.push('/resume')} eventKey="/resume">Resume</Nav.Link>
      </Nav.Item><Nav.Item>
        <Nav.Link onClick={() => history.push('/projects')} eventKey="/projects">Project Showcase</Nav.Link>
      </Nav.Item><Nav.Item>
        <Nav.Link onClick={() => history.push('/contact')} eventKey="/contact">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>







      {/* <Nav variant='pills' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>About Me</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey='/skills' href='/skills'>Skills</Nav.Link>
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
      </Nav> */}

      <Route path='/' exact component={AboutMe} />
      <Route path='/home' exact component={AboutMe} />
      <Route path='/skills' exact component={Skills} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contact' exact component={Contact} />
   </>
  );
}

export default App;
