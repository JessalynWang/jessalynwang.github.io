import './about.css';

function About() {
    return (
      <div className="about" id="about">
        <div className="cluster">
            <div className="about-title">Hi!</div>
            <div className="about-desc">My name is Jessalyn Wang, and I am a third year
            undergraduate student majoring in Computer Science. Outside of school I am currently an Associate Software Engineer at Maxar Technologies and work in the Tech4Good Lab.
            My interests lie in web development, machine learning, and data science. 
            In my spare time I love to draw, read, and travel!</div>
            <div className="about-header"><div>skills</div></div>
            <div className="skills">
              <div><i className="fab fa-python"></i></div>
              <div><i className="fab fa-css3-alt"></i></div>
              <div><i className="fab fa-html5"></i></div>
              <div><img src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png" alt="c++ icon"/></div>
              <div><i className="fab fa-js-square"></i></div>
            </div>
            <div className="about-header"><div>current involvements</div></div>
            <a href="https://www.maxar.com/" rel="noreferrer" target="_blank" className="about-link maxar"><div>Maxar</div></a>
            <a href="https://tech4good.soe.ucsc.edu/" rel="noreferrer" target="_blank" className="about-link ntxsd"><div>Tech4Good</div></a>
            <a href="https://www.lspace.asu.edu/" rel="noreferrer" target="_blank" className="about-link lspace"><div>NASA L'SPACE Academy</div></a>
        </div>
      </div>
    );
  }
  
  export default About;