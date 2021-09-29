import './home.css';
import Resume from '../../files/Jessalyn_Wang_Resume_Current_8_24_2021.pdf'

function Home() {
    return (
      <div className="home" id="home">
        <div className="home-title">Jessalyn Wang</div>
        <div className="home-desc">Class of 2023 | CS</div>
        <div className="home-links">
          {/* <a href={Resume} rel="noreferrer" target="_blank" className="home-button"><div>Resume</div></a> */}
          <a href="https://www.linkedin.com/in/jessalyn-wang-84a0261a5/" rel="noreferrer" target="_blank" className="home-button"><div>LinkedIn</div></a>
          <a href="https://github.com/JessalynWang" rel="noreferrer" target="_blank" className="home-button"><div>Github</div></a>
        </div>
      </div>
    );
  }
  
  export default Home;