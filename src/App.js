import './App.css';
import Intro  from'./Intro.js'
import Skills from './Skills.js'
import Project from './Project.js'
import Navbar from './Navbar.js'
import Contact from './Contact'
import Footer from './Footer.js'
function App() {
  return (
    <div className="App">  
     <Intro/>
      <canvas>      
  </canvas>    
     <Navbar/>
     <div> <br/></div>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer/>
     
  </div>
  );
}

export default App;
