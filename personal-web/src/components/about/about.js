import './about.css';

function About() {
    return (
      <div className="about" id="about">
        <div className="cluster">
            <div className="about-title">Hi!</div>
            <div className="about-desc">My name is Jessalyn Wang, and I am a second year
            undergraduate student double majoring in Computer Science and Business Management 
            Economics at the University of California, Santa Cruz. My interests lie in 
            full-stack web development, machine learning, and data science. In my spare time
            I love to draw, read, play volleyball and water polo, and watch YouTube.</div>
            <div className="about-header"><div>skills</div></div>
            <div className="skills">
              <div><i className="fab fa-python"></i></div>
              <div><i className="fab fa-css3-alt"></i></div>
              <div><i className="fab fa-html5"></i></div>
              <div><img src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png" alt="c++ icon"/></div>
              <div><i className="fab fa-js-square"></i></div>
            </div>
            <div className="about-header"><div>current involvements</div></div>
            <a href="https://tech4good.soe.ucsc.edu/#/" rel="noreferrer" target="_blank" className="about-link tech4good"><div>Tech4Good</div></a>
            <a href="https://neurotech.ucsc.edu/" rel="noreferrer" target="_blank" className="about-link ntxsc"><div>NeuroTechSC</div></a>
            <a href="https://www.wavelf.org/" rel="noreferrer" target="_blank" className="about-link wave"><div>Wave</div></a>
        </div>
      </div>
    );
  }
  
  export default About;