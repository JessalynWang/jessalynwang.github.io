import './App.css';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Projects from './components/projects/projects.js';
import Nav from './components/nav/nav.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
