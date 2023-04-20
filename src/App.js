import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/contact';
import Image1 from './components/image/image';
import Languages from './components/languages/languages';
import Skills from './components/skills/skills';
import Personalskills from './components/personalskills/personalskills';
import Hobbies from './components/hobbies/hobbies';
import Summary from './components/summary/summary';
import Education from './components/education/education';
import Certification from './components/certifications/certification';
import Project from './components/projects/project';
import Declare from './components/declaration/declare';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Image1/>
        <Contact />
        <Languages />
        <Skills />
        <Personalskills />
        <Hobbies />


      </div>
      <div className='right'>
        <Summary />
        <Education />
        <Certification />
        <Project/>
        <Declare/>
      </div>



    </div>
  );
}

export default App;
