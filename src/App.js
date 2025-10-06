import './App.css';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Nav from './components/nav/nav.js';
import Experience from './components/experience/experience.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
