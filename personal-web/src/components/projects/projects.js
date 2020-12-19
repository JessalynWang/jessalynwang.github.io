import './projects.css';
import DemoComponent from "../shared/demo_component/demo_component.js"
import projects from "../../data/projects.json"
function Projects() {

  function togglecCollapse(e) {
    const x = e.currentTarget.id;

    let y = [];
    if (x === "py") {
      y = document.getElementsByClassName("pyproj");
    } else if (x === "cpp") {
      y = document.getElementsByClassName("cppproj");
    } else if (x === "web") {
      y = document.getElementsByClassName("wproj");
    }

    for (var i = 0; i < y.length; i++) {
      y[i].classList.toggle("hide");
    }
  };

  return (
    <div className="projects" id="projects">
      <div className="projects-title">Projects</div>
      <div className="center">
      <div className="sub-title"><button id="py" onClick={togglecCollapse}>
        <div>Python</div>
        <i className="fas fa-chevron-up pyproj"></i>
        <i className="fas fa-chevron-down pyproj hide"></i>
      </button></div>
      <div className="sub-container hide pyproj">
        {
          projects.python.map((val, index) =>
            <DemoComponent name={val.name} image={val.image} link={val.link} uses={val.uses} desc={val.description} key={index}/>
          )
        }
      </div>

      <div className="sub-title"><button id="cpp" onClick={togglecCollapse}>
        <div>C/C++</div>
        <i className="fas fa-chevron-up cppproj"></i>
        <i className="fas fa-chevron-down cppproj hide"></i>
      </button></div>
      <div className="sub-container hide cppproj">
        {
          projects.cpp.map((val, index) =>
            <DemoComponent name={val.name} image={val.image} link={val.link} uses={val.uses} desc={val.description} key={index}/>
          )
        }
      </div>

      <div className="sub-title"><button id="web" onClick={togglecCollapse}>
        <div>Web Apps</div>
        <i className="fas fa-chevron-up wproj"></i>
        <i className="fas fa-chevron-down wproj hide"></i>
      </button></div>
      <div className="sub-container hide wproj">
        {
          projects.webapps.map((val, index) =>
            <DemoComponent name={val.name} image={val.image} link={val.link} uses={val.uses} desc={val.description} key={index}/>
          )
        }
      </div>
      </div>
    </div>
  ); 
}
  
  export default Projects;