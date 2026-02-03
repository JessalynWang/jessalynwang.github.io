import './about.css';

function About() {
    return (
      <div className="about" id="about">
        <div className="about-cluster">
            <div className="about-title">Hello 👋</div>
            <div className="about-desc">
              I am an SDE II at Amazon based in the San Francisco Bay Area.
              I graduated in 2023 from UC San Diego with a B.S. in Computer Science. 
              In my spare time I love to draw, read, and travel!

              <br/><br/>

              My areas of interest broadly include <b>safety, sustainability, privacy, and HCI</b>.
              From a technical standpoint I am currently focused on <b>increasing developer and QA productivity</b> by
              building agentic workflows for automation test generation, test plan creation, and smart test case filtering.
              
              AI aside I also drive code share enablement through cross-platform development using Kotlin Multiplatform.

              <br/><br/>
              At Amazon I am with the Amazon Delivery organization and have domain expertise in last mile logistics.

              Particularly, I have been deeply involved in technology for <b>driver safety and contingency response management </b>
              as well as <b>large scale anomaly detection and resolution</b>.
              </div>
        </div>
      </div>
    );
  }
  
  export default About;