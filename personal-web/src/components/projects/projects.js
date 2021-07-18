import './projects.css';
import projects from "../../data/projects.json"
import ComponentTab from '../shared/component_tab/component_tab';
function Projects() {

  return (
    <div className="projects" id="projects">
      <div className="projects-title">Projects</div>
      <div className="center">
        {
          projects.map((val, index) =>
            <ComponentTab id={val.name + index} name={val.name} data={val.data} key={index} />
          )
        }
      </div>
    </div>
  ); 
}
  
  export default Projects;